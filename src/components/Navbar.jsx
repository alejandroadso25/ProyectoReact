import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mi Proyecto React</h2>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/section">Sección</Link>
        </li>
        <li>
          <Link to="/aside">Aside</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;