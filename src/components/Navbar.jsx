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
                <NavLink to="/ChiSiamo">Chi Siamo</NavLink>
                <NavLink to="/ListaPost">Lista Post</NavLink>
            </nav>
        </>
    )
}