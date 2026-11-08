function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <span className="hero-label">
          BIENVENIDO AL UNIVERSO GAMING
        </span>

        <h1>
          EXPLORA NUEVOS
          <span> UNIVERSOS</span>
        </h1>

        <p>
          Descubre videojuegos, explora mundos increíbles
          y encuentra tu próxima aventura.
        </p>

        <a href="#juegos" className="primary-button">
          Explorar videojuegos →
        </a>
      </div>

      <div className="hero-visual">
        <div className="portal">
          <span>NEXORA</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

