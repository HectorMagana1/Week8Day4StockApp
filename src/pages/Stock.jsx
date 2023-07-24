import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useFamilyContext } from "../familyContext"


export default function Stock() {
    
    const { data } = useFamilyContext()
    const params = useParams()
    

    function handleData() {
        return data.find((element) => element.symbol === params.symbol )
    }
    
    const filterValue = handleData()
    
    return (
        <div>
            <Navbar />
            <div className="stock-info-container">
                <h1>{filterValue.name}</h1>
                <h1>{filterValue.symbol}</h1>
                <h1>Last Price: {filterValue.lastPrice}</h1>
                <h1>Change: {filterValue.change}</h1>
                <h1>High: {filterValue.high}</h1>
                <h1>Low: {filterValue.low}</h1>
                <h1>Open: {filterValue.open}</h1>
            </div>
            
        </div>
    )
}