import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <main className="main">
        <h1>Contenido Principal</h1>
        <p>Bienvenido a mi aplicación React con rutas anidadas.</p>
        <p>Navega por el menú para explorar nuestros productos y más.</p>
      </main>

      <section className="section">
        <h2>Segunda Sección</h2>
        <p>Más contenido aquí</p>
        <p>Descubre nuestras categorías de productos:</p>
        <div className="section-links">
          <Link to="/productos">Ir a Productos</Link>
        </div>
      </section>

      <aside className="aside">
        <h3>Información Adicional</h3>
        <p>Contáctanos para más información.</p>
        <Link to="/contacto">Contacto</Link>
      </aside>
    </div>
  );
}

export default Home;