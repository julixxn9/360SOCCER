import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
//<Link> reemplaza al <a> tradicional, pero sin recargar la página cole
// cuando le das clic, React cambia la URL SIN hacer alguna pediticion al server, lo que lo hace cool
function Header(){
    return(
        <header className="header">
                <div className="header-izq">
                    <h1>360FUTBOL</h1>
                    <nav className="header-navegacion">
                        <ul>
                            <li><Link to="/equipos">Equipos</Link></li>
                            <li><Link to="/partidos">Partidos</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-der">
                    <h3 className="header-user" id="header-user"><a href="#">Usuario</a></h3> {/* crear Link para ir a perfil de usuario y mande a la página de perfil o formulario*/}
                    <i className="bi bi-nut-fill"></i>
                </div>    
        </header>
    )
};

export default Header;