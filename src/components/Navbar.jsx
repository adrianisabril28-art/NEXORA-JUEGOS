import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NEXORA<span> GAMING</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/favoritos">♥ Favoritos</Link>
      </div>

      <Link to="/catalogo" className="nav-button">
        Explorar
      </Link>
    </nav>
  )
}

export default Navbar