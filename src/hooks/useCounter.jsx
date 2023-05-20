import { useState } from "react";

const useCounter = (initial, max) => {
    if (initial < 0 || initial > max) { initial = 0; }
    
    const [counter, setCounter] = useState(initial);

    const increaseCounter = () => {
        if (counter < max) { setCounter(counter + 1); }
    }
    const decreaseCounter = () => {
        if (counter > 0) { setCounter(counter - 1); }
    }
    const resetCounter = () => {
        setCounter(initial);
    }
    return { counter, increaseCounter, decreaseCounter, resetCounter };
}

export default useCounter;