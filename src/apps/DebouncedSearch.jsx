import { useState, useEffect, useRef } from "react"
import {searchUsers} from "../data/userData"

const DebouncedSearch = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const timerRef = useRef(null);

    useEffect(() => {
        if (!search.trim()) {
            setResult([]);
            return;
        }

        timerRef.current && clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            const temp = searchUsers(search.toLowerCase());
            setResult(temp);
        }, 500);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [search]);

  return (
    <div>
        <input 
        type="text" 
        placeholder="Search user" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        {result.map(res => (
            <div key={res.name}>
                {res.name}
            </div>
        ))}
    </div>
  )
}

export default DebouncedSearch