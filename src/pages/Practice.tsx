import React,
{ useEffect, useState, useRef, createContext, useContext, useCallback, useMemo, useReducer, useLayoutEffect } from 'react'
import { Button, Box, Card, Typography } from '@mui/material'
import { useFetch } from './useFetch'

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "dec":
            return { count: state.count - 1 }
        default:
            throw new Error();
    }

}
const Child = ({ onClick }) => {
    console.log('Child component rendered');

    return (
        <button onClick={onClick}>Click me</button>
    )
}

const Practice = () => {
    const { data, loading } = useFetch('https://dummyjson.com/products');
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const [width, setWidth] = useState(0);
    const boxRef = useRef();
    useLayoutEffect(() => {
        setWidth(boxRef.current.getBoundingClientRect().width)

    }, [])

    // Memoized callback
    const handleClick = useCallback(() => {
        console.log('Button clicked!');
    }, []);
    const [number, setNumber] = useState(1);

    const square = useMemo(() => {
        console.log('Calculating square...');
        return number * number;
      }, [number]);


    return (
        <Box ref={boxRef} display="flex" justifyContent="center" alignItems="center" >
            <Card sx={{ width: 400, padding: "10px", gap: "10px", display: "flex", flexDirection: "column", alignItems: "center" }} >
                <Typography>{state.count}</Typography>
                <Typography>{width}</Typography>
                <h1>Square of {number} is {square}</h1>

                <Child onClick={handleClick}></Child>
                <Button variant='outlined' onClick={() => dispatch({ type: "increment" })}>Add</Button>
                <Button variant='outlined' onClick={() => dispatch({ type: "dec" })}>-</Button>
                <button onClick={() => setNumber(number + 1)}>Increase Number</button>

            </Card>

        </Box>
    )
}

export default Practice