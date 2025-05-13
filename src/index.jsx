import { createRoot } from "react-dom/client";
// esto es para poder usar el hook useReducer que es un hook de react y un hook de react es como un componente que se puede usar en otros componentes y un componente es una clase o una funcion que se puede usar en otros componentes
import App from "./components/App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
    <App/>
);
