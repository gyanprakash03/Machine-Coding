import { useState } from "react";

const slides = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Carousel = () => {
    const [firstSlide, setFirstSlide] = useState(0);
    const windowsize = 4;

    function prevHandler() {
        if (firstSlide === 0) return;
        setFirstSlide(prev => prev-1);
    }

    function nextHandler() {
        if (firstSlide + windowsize >= slides.length) return;
        setFirstSlide(prev => prev+1);
    }

    return (
        <div className="flex gap-6 items-center">
            <button className="w-18 h-18 rounded-full bg-blue-800 text-4xl font-bold border border-white cursor-pointer hover:bg-blue-900"
            onClick={prevHandler}>
                &lt;
            </button>

            <div className="flex gap-5 w-300 mx-auto overflow-x-scroll">
                {slides.slice(firstSlide, firstSlide + windowsize).map(slide => (
                    <div key={slide}
                    className="flex shrink-0 justify-center items-center w-70 h-80 bg-blue-950 border border-white text-4xl rounded-xl">
                        {slide}
                    </div>
                ))}
            </div>
            
            <button className="w-18 h-18 rounded-full bg-blue-800 text-4xl font-bold border border-white cursor-pointer hover:bg-blue-900"
            onClick={nextHandler}>
                &gt;
            </button>
        </div>
    )
}

export default Carousel