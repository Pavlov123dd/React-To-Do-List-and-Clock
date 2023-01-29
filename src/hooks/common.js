import {useState, useEffect} from 'react'

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(localStorage.getItem(key) || defaultValue);

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value]);
    return [value, setValue]
}





