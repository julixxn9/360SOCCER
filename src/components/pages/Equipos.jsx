import React from "react";

function Equipos() {
    // Definimos los estilos en un objeto
    // Este objeto contiene propiedades CSS que se aplicarán a los elementos
    const estilos = {
        layout: {
            display: "flex",
            gap: "2rem",
            padding: "2rem",
            backgroundColor: "#1E1F22",
            color: "#fff",
            flexWrap: "wrap",
        },
        columna: {
            flex: 1,
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
        },
        seccionTitulo: {
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "1rem",
            borderBottom: "2px solid #FFD700",
            paddingBottom: "5px",
        },
        tarjeta: {
            backgroundColor: "#2F3136",
            border: "1px solid #1A1D23",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        titulo: {
            textAlign: "center",
            fontSize: "18px",
            color: "#FFD700",
            marginBottom: "10px",
        },
        subtitulo: {
            textAlign: "center",
            fontSize: "15px",
            color: "#AAB0BC",
            marginBottom: "10px",
        },
        tabla: {
            width: "100%",
            borderCollapse: "collapse",
        },
        th: {
            backgroundColor: "#3A3D42",
            padding: "10px",
            textAlign: "left",
        },
        td: {
            padding: "10px",
            borderBottom: "1px solid #444",
        },
        fecha: {
            textAlign: "center",
            color: "#00FFAE",
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "12px",
        },
        favorito: {
            textAlign: "right",
            fontSize: "18px",
            color: "#00FFAE",
        }
    };

    // Datos de ejemplo
    // Array de objetos que representan partidos
    // Cada objeto tiene las propiedades local, visitante, fecha, liga y favorito
    // local: equipo que juega en casa
    // visitante: equipo que juega fuera de casa
    // fecha: fecha del partido 
    // liga: nombre de la liga
    // favorito: booleano que indica si el partido es favorito o no (true o false)


    // Array de objetos que representan jugadores por liga
    // Cada objeto tiene las propiedades nombre, nacionalidad, equipo, goles y asistencias
    // nombre: nombre del jugador
    // nacionalidad: nacionalidad del jugador
    // equipo: equipo al que pertenece el jugador
    // goles: cantidad de goles anotados por el jugador
    // asistencias: cantidad de asistencias realizadas por el jugador
    const jugadoresPorLiga = {
        "Premier League": [
            { nombre: "Erling Haaland", nacionalidad: "Noruega", equipo: "Manchester City", goles: 36, asistencias: 8 },
            { nombre: "Bukayo Saka", nacionalidad: "Inglaterra", equipo: "Arsenal", goles: 14, asistencias: 12 },
        ],
        "LaLiga": [
            { nombre: "Robert Lewandowski", nacionalidad: "Polonia", equipo: "Barcelona", goles: 23, asistencias: 5 },
            { nombre: "Kylian Mbappé", nacionalidad: "Francia", equipo: "Real Madrid", goles: 27, asistencias: 7 },
        ],
        "Serie A": [
            { nombre: "Lautaro Martínez", nacionalidad: "Argentina", equipo: "Inter", goles: 24, asistencias: 4 },
            { nombre: "Victor Osimhen", nacionalidad: "Nigeria", equipo: "Napoli", goles: 20, asistencias: 3 },
        ],
        "Bundesliga": [
            { nombre: "Harry Kane", nacionalidad: "Inglaterra", equipo: "Bayern Munich", goles: 30, asistencias: 6 },
            { nombre: "Jamal Musiala", nacionalidad: "Alemania", equipo: "Bayern Munich", goles: 11, asistencias: 10 },
        ],
        "Ligue 1": [
            { nombre: "Jonathan David", nacionalidad: "Canadá", equipo: "Lille", goles: 21, asistencias: 4 },
            { nombre: "Alexandre Lacazette", nacionalidad: "Francia", equipo: "Lyon", goles: 17, asistencias: 3 },
        ],
    };

    return (
        <section style={estilos.layout}>
            {/* Columna Derecha - Estadísticas */}
            <div style={estilos.columna}>
                <div style={estilos.seccionTitulo}>Estadísticas por Liga</div>
                {/* Mapeamos las ligas y sus jugadores */}
                {/* Object.entries convierte el objeto en un 
                array de pares [clave, valor] */}
                {Object.entries(jugadoresPorLiga).map(([liga, jugadores], index) => (
                    <div key={index} style={estilos.tarjeta}>
                        <h3 style={estilos.titulo}>{liga}</h3>
                        <table style={estilos.tabla}>
                            <thead>
                                <tr>
                                    <th style={estilos.th}>Jugador</th>
                                    <th style={estilos.th}>Nac.</th>
                                    <th style={estilos.th}>Equipo</th>
                                    <th style={estilos.th}>Goles</th>
                                    <th style={estilos.th}>Asist.</th>
                                </tr>
                            </thead>
                            <tbody>
                {/* Mapeamos los jugadores de cada liga */}
            {/* jugadores es un array de objetos, y cada objeto 
            tiene las propiedades nombre, nacionalidad, equipo, 
                        goles y asistencias */}
                                {jugadores.map((j, idx) => (
                                    <tr key={idx}>
                                        <td style={estilos.td}>{j.nombre}</td>
                                        <td style={estilos.td}>{j.nacionalidad}</td>
                                        <td style={estilos.td}>{j.equipo}</td>
                                        <td style={estilos.td}>{j.goles}</td>
                                        <td style={estilos.td}>{j.asistencias}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </section>
    );
}
// Ayuada me estoy muriendo con esto
// Este componente se encarga de mostrar los equipos y sus estadísticas
export default Equipos;
