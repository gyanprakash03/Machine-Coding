import { useRef, useState, useEffect } from "react"

const PopOver = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const popOverRef = useRef(null);

    function disablePopOver(e) {

        if (buttonRef.current && popOverRef.current &&
            !buttonRef.current.contains(e.target) && 
            !popOverRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
      window.addEventListener('click', disablePopOver);
    
      return () => {
        window.removeEventListener('click', disablePopOver);
      }
    }, [])
    

  return (
    <div className="flex flex-col gap-4 items-center">
        <button 
        className="bg-blue-900 py-1 px-3 rounded-lg"
        onClick={() => setIsOpen(prev => !prev)}
        ref={buttonRef}>
            open PopOver
        </button>

        {isOpen && 
        <div ref={popOverRef} className="py-1 px-3 border border-slate-400">Hello World!</div>}
    </div>
  )
}

export default PopOver