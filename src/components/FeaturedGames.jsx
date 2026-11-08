import GameCard from './GameCard'

const games = [
  {
    id: 1,
    name: 'Cyberpunk 2077',
    category: 'Acción',
    description: 'Explora una ciudad futurista llena de posibilidades.'
  },
  {
    id: 2,
    name: 'Elden Ring',
    category: 'Aventura',
    description: 'Descubre un mundo de fantasía y exploración.'
  },
  {
    id: 3,
    name: 'Forza Horizon 5',
    category: 'Carreras',
    description: 'Vive la emoción de las carreras.'
  },
  {
    id: 4,
    name: 'EA Sports FC',
    category: 'Deportes',
    description: 'Disfruta la experiencia del fútbol.'
  }
]

function FeaturedGames({ selected }) {
  const filteredGames = selected === 'Todos'
    ? games
    : games.filter((game) => game.category === selected)

  return (
    <section className="games-section" id="juegos">
      <div className="section-heading">
        <div>
          <span className="section-label">
            DESCUBRE TU PRÓXIMA AVENTURA
          </span>
          <h2>JUEGOS DESTACADOS</h2>
        </div>
      </div>

      <div className="games-grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}

        {filteredGames.length === 0 && (
          <p>No hay juegos disponibles en esta categoría.</p>
        )}
      </div>
    </section>
  )
}

export default FeaturedGames
