import { Link, Outlet } from "react-router-dom";

function Productos() {
  return (
    <main className="page">
      <h1>Productos</h1>
      <p>Selecciona una categoría:</p>
      <div className="product-links">
        <Link to="hombre">Hombre</Link>
        <Link to="mujer">Mujer</Link>
      </div>
      <section className="product-outlet">
        <Outlet />
      </section>
    </main>
  );
}

export default Productos;
