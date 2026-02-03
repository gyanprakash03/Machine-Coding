import { useRef, useState, useEffect } from "react";

const ids = [1, 2, 3, 4, 5];

const StarRating = () => {
    const [filledStars, setFilledStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);
    const displayStars = hoveredStars || filledStars;
    
    return (
        <div className="flex text-5xl items-center">
            {ids.slice(0, displayStars).map((id) => (
                <div key={id}
                className="cursor-pointer text-yellow-300 px-1"
                onClick={() => setFilledStars(prev => prev === id ? 0 : id)}
                onMouseOver={() => setHoveredStars(id)}
                onMouseOut={() => setHoveredStars(0)}>
                    ★
                </div>
            ))}

            {ids.slice(displayStars).map((id) => (
                <div key={id}
                className="cursor-pointer text-yellow-300 px-1"
                onClick={() => setFilledStars(id)}
                onMouseOver={() => setHoveredStars(id)}
                onMouseOut={() => setHoveredStars(0)}>
                    ☆
                </div>
            ))}

            <div className="text-3xl ml-5">({filledStars})</div>
        </div>
    )
}

export default StarRating