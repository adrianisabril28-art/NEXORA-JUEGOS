
import { useState } from 'react'
import './App.css'

const games = [
  { id: 1, name: 'Cyberpunk 2077', category: 'Acción', description: 'Explora una ciudad futurista llena de posibilidades.' },
  { id: 2, name: 'Elden Ring', category: 'Aventura', description: 'Descubre un mundo de fantasía y exploración.' },
  { id: 3, name: 'Forza Horizon 5', category: 'Carreras', description: 'Vive la emoción de las carreras.' },
  { id: 4, name: 'EA Sports FC', category: 'Deportes', description: 'Disfruta la experiencia del fútbol.' },
]

const categories = ['Todos', 'Acción', 'Aventura', 'Carreras', 'Deportes']

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#inicio" className="logo">NEXORA<span> GAMING</span></a>

      <div className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#categorias">Categorías</a>
        <a href="#juegos">Juegos</a>
        <a href="#novedades">Novedades</a>
      </div>

      <a href="#juegos" className="nav-button">Explorar</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <span className="hero-label">BIENVENIDO AL UNIVERSO GAMING</span>

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

function Categories({ selected, onSelect }) {
  return (
    <section className="categories-section" id="categorias">
      <h2>EXPLORA POR CATEGORÍA</h2>
      <p>Encuentra el universo que más te gusta.</p>

      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            className={selected === category ? 'category active' : 'category'}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}

function FeaturedGames({ selected }) {
  const filteredGames = selected === 'Todos'
    ? games
    : games.filter((game) => game.category === selected)

  return (
    <section className="games-section" id="juegos">
      <div className="section-heading">
        <div>
          <span className="section-label">DESCUBRE TU PRÓXIMA AVENTURA</span>
          <h2>JUEGOS DESTACADOS</h2>
        </div>
      </div>

      <div className="games-grid">
        {filteredGames.map((game) => (
          <article className="game-card" key={game.id}>
            <div className="game-image">
              <span>{game.category}</span>
            </div>

            <div className="game-info">
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <button className="game-button">Ver detalles →</button>
            </div>
          </article>
        ))}

        {filteredGames.length === 0 && (
          <p>No hay juegos disponibles en esta categoría.</p>
        )}
      </div>
    </section>
  )
}

function NewsSection() {
  return (
    <section className="news-section" id="novedades">
      <span className="section-label">MANTENTE ACTUALIZADO</span>
      <h2>ÚLTIMAS NOVEDADES</h2>
      <p>
        Próximamente encontrarás aquí noticias,
        lanzamientos y novedades del mundo gaming.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#inicio" className="logo">
        NEXORA<span> GAMING</span>
      </a>
      <p>Explora. Juega. Descubre nuevos universos.</p>
      <small>© 2026 NEXORA GAMING. Proyecto académico.</small>
    </footer>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <FeaturedGames selected={selectedCategory} />
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
