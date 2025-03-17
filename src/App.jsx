import { useState } from "react";
import Header from "./componentes/Header"
import Contenido from "./componentes/contenido/Contenido"
function App() {
  // Estado para controlar si se muestra el contenido
  const [mostrarContenido, setMostrarContenido] = useState(false);

  // Función para alternar la visibilidad del contenido
  function mostrar() {
    setMostrarContenido(!mostrarContenido);
  }

  return (
    <>
    <section  className={mostrarContenido ? "invisible":"contenedorBoton"}>
      <button className={mostrarContenido ? "invisible":"boton"} onClick={mostrar}>
        VER
      </button>
    </section>

      {mostrarContenido && 
      <>
        <audio src="/audio/music.mp3" autoPlay loop></audio>
        <div className="entrada">
          <Header />
          <Contenido />
        </div>
      </>
      }
    </>
  )
}

export default App
