function Partidos (){

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

    const partidos = [
        { local: "Real Madrid", visitante: "Manchester City", fecha: "10/05/2025", liga: "Champions League", favorito: true }, 
        { local: "Bayern Munich", visitante: "Arsenal", fecha: "11/05/2025", liga: "Champions League", favorito: false },
        { local: "Inter", visitante: "Juventus", fecha: "12/05/2025", liga: "Serie A", favorito: true },
        { local: "Barcelona", visitante: "Atlético Madrid", fecha: "13/05/2025", liga: "LaLiga", favorito: false },
    ];

    return(
        <>
        <section className="section" style={estilos.layout}>
            <div style={estilos.columna}>
                <div style={estilos.seccionTitulo}>Partidos Importantes</div>
                {/* Mapeamos los partidos */}
                {/* partidos es un array de objetos,
        y cada objeto tiene las propiedades local, visitante,
                    fecha, liga y favorito */}
                {partidos.map((p, index) => (
                    <div key={index} style={estilos.tarjeta}>
                        <div style={estilos.favorito}>
                            {p.favorito ? "⭐" : ""}
                            {p.favorito ? "Favorito" : ""}
                        </div>
                        <h3 style={estilos.titulo}>{p.local} vs {p.visitante}</h3>
                        <h4 style={estilos.subtitulo}>{p.liga}</h4>
                        <p style={estilos.fecha}>🗓 {p.fecha}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Partidos;