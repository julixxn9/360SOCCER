import "../styles/index.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Importamos BrowserRouter y Switch de react-router-dom
// { BrowserRouter, Route, Switch } esto sirve para que la app sepa que ruta tomar 
//  es una librería que te permite manejar rutas o navegación de páginas dentro de una aplicación React de una sola página (SPA).
import  Header from "./header.jsx"; 

// pages
import Equipos from "./pages/Equipos.jsx";
import Partidos from "./pages/Partidos.jsx";
import { useState } from "react";

function App() {
    const [estilos, setEstilos] = useState(false);

    const estilosConfig = {
        color: "red",
        fontSize: "20px",
    };

    return (
        <BrowserRouter> 
        {/* BrowserRouter es todo el sistema de rutas de la aplicación   encerramos todo porque es el padre de todos los componentes de rutas (header main)*/}
            <div className="contenedor" style={estilosConfig}>
            <div className="contenedor" {...estilos.color}>
                <Header/>
                {/*  define la ruta o URL que debe coincidir para renderizar un componente 
                determinado. Es decir, si un usuario accede a una URL que coincide con la}
                path definida, el componente asociado a esa ruta se mostrará en la interfaz.  */}
                <main className="contenido">
                    <Routes> {/* Aquí se definen las rutas de la aplicación */}
                    {/* Route es para definir una ruta(URL) que va a mostar un componente*/}
                        <Route path="/" element={<Equipos/>}/> {/* Ruta de equipos */}
                        <Route path="/equipos" element={<Equipos/>}/> Ruta de equipos
                        <Route path="/partidos" element ={<Partidos/>}/> {/* Ruta de partidos */}
                        {/*Para rutas que no existe se puede usar el * para puedas darle un mensaje a una ruta inexistente*/}
                        <Route path="*" element={<div>Esta ruta no existe</div>}/>
                    </Routes>
                </main>
        </div>
    </div>
    </BrowserRouter>
    )
};
export default App; // Exportamos la función App como el componente principal de la aplicación