import { useReducer, createContext, useContext, useState, useEffect } from "react";
import data from '../data'
import reducer from "./reducer";

// creating our context here
export const FamilyContext = createContext()

// custom hook
export function useFamilyContext() {
    return useContext(FamilyContext)
}

// custom Provider component
export function FamilyProvider(props) {

    let [stocks, dispatch] = useReducer(reducer,null,()=>{
        // console.log(data);
        const storedData = localStorage.getItem('data')
        const stock = data[0];
        // stocks=data;
        return storedData ? JSON.parse(storedData) : data;
    })

    useEffect(()=>{
        reducer();
        localStorage.setItem('data',JSON.stringify(stocks))
    },[stocks])

    const sharedValue = {
        stocks,
    }

    return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}