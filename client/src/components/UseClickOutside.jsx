import { useEffect } from "react";

const UseClickOutside = (ref , callback) => {
    useEffect(() => {
        const handleClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };

        window.addEventListener("mousedown" , handleClick);

        return (() => {
            window.removeEventListener("mousedown" , handleClick);
        })
    },[ref  ,callback]);
}

export default UseClickOutside;