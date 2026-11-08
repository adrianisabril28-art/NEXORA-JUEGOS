
function GameCard({ game }) {
  return (
    <article className="game-card">
      <div className="game-image">
        <span>{game.category}</span>
      </div>

      <div className="game-info">
        <h3>{game.name}</h3>
        <p>{game.description}</p>

        <button className="game-button">
          Ver detalles →
        </button>
      </div>
    </article>
  )
}

export default GameCard
