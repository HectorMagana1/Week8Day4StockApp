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
            <div className='dashboard-stock'>
                <h1 className='name'>Company Name</h1>
                <h1 className='price'>Price</h1>
                <h1 className='change'>Change</h1>
            </div>
            {stocks.map((stock) => {
                return ( 
                    <div  key={stock.symbol}>
                        <Link to={`/stocks/${stock.symbol}`} key={stock.symbol}>
                            <div className='dashboard-stock'>
                                <h1 className='name'>{stock.name} (${stock.symbol})</h1>
                                <h1 className='price'>{stock.lastPrice}</h1>
                                <h1 className='change'>{stock.change.toFixed(2)}</h1>
                            </div>
                            
                        </Link>
                    </div>                      
                )
            })}
        </div>
        </>
    )
}