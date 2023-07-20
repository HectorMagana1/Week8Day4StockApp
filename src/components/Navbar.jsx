import { useNavigate } from "react-router-dom"


export default function Navbar() {
    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate("/stocks")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
        </div>
    )
}