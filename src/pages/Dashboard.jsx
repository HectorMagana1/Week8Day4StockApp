import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFamilyContext } from '../familyContext'


export default function Dashboard() {

    const { stocks } = useFamilyContext()
    console.log(stocks)

    return (
        <div>
            <Navbar />
            {stocks.map((stock) => {
                return (
                    
                    <Link to={`/stocks/${stock.symbol}`} key={stock.symbol}>
                        <h1>{stock.name}</h1>
                    </Link>
                )
            })}
        </div>
    )
}