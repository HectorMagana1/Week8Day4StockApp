import { createContext, useContext, useState } from "react";
import data from '../data'

// creating our context here
export const FamilyContext = createContext()

// custom hook
export function useFamilyContext() {
    return useContext(FamilyContext)
}

// custom Provider component
export function FamilyProvider(props) {

    const [stocks, setStocks] = useState(data)

    const sharedValue = {
        stocks,
    }

    return (
        <FamilyContext.Provider value={sharedValue}>
            {props.children}
        </FamilyContext.Provider>
    )
}