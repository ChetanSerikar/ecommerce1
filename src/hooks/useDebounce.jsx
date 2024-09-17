import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const useDebounce = (value, delay = 500) => {
    const [debounce, setDebounce] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value)
        }, delay);
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounce;
}

export default useDebounce