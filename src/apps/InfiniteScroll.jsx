import { useState, useEffect, useRef } from "react"
import {getUsers} from "../data/userData";

const MAX_ITEMS = 50;
const limit = 10;

const InfiniteScroll = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const initRef = useRef(false);
  const offsetRef = useRef(0);
  const loadingRef = useRef(false);

  async function getMoreUsers() {
    if (loadingRef.current || userList.length >= MAX_ITEMS) return;

    loadingRef.current = true;
    setLoading(true);

    const nextUserList = await getUsers(offsetRef.current, limit);

    setUserList(prev => [...prev, ...nextUserList]);
    offsetRef.current += limit;

    loadingRef.current = false;
    setLoading(false);
  }

  function handleScroll() {
    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200;

    if (nearBottom) {
      getMoreUsers();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (initRef.current) return;

    initRef.current = true;
    getMoreUsers();
  }, []);

  return (
    <div className="py-3">
      <div className="flex flex-col text-xl gap-8">
        {userList.map(user => (
          <div key={user.name} className="flex flex-col w-125 gap-4">
            <div className="flex justify-between">
              <span className="text-white">{user.name}</span>
              <span className="italic">{user.occupation}</span>
            </div>

            <span className="text-lg">{user.about}</span>
          </div>
        ))}
      </div>

      {loading && <div className="max-w-fit mx-auto mt-5">Loading...</div>}
    </div>

  )
}

export default InfiniteScroll