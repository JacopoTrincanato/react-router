//importo NavLink da react-router-dom
import { NavLink } from "react-router-dom";

//creo il componente Navbar
export default function Navbar() {
    //eseguo il return
    return (
        <>
            {/*creo la navbar */}
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Chi Siamo">Chi Siamo</NavLink>
                <NavLink to="/Lista Post">Lista Post</NavLink>
            </nav>
        </>
    )
}