import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFamilyContext } from '../familyContext'


export default function Dashboard() {

    const { stocks } = useFamilyContext()
    console.log(stocks)

    return (
        <>
        <Navbar />
        <div className='dashboard-container'>
        <table>
            <tr>
                <td>Company Name</td>
                <td>Price</td>
                <td>Change</td>
            </tr>
            {stocks.map((stock) => {
                return ( 
                    <tr className='dashboard-stock'>
                        <Link to={`/stocks/${stock.symbol}`} key={stock.symbol}>
                            <td>{stock.name} (${stock.symbol})</td>
                            <td>{stock.lastPrice}</td>
                            <td>{stock.change.toFixed(2)}</td>
                        </Link>
                    </tr>                      
                )
            })}
        </table>
        </div>
        </>
    )
}