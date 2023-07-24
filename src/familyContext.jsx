import { createContext, useContext, useState, useEffect } from "react";
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

    const sharedValue = {
        data,
    }

    return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}