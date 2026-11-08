function JuegoCard({ juego, esFavorito, onToggleFavorito }) {
  return (
    <article className="juego-card">
      <div className="juego-card-imagen">
        <img
          src={juego.imagen}
          alt={juego.nombre}
        />
      </div>

      <div className="juego-card-contenido">
        <span className="juego-genero">
          {juego.genero}
        </span>

        <h3>{juego.nombre}</h3>

        <p>{juego.descripcion}</p>

        <button
          className={`btn-favorito ${esFavorito ? 'activo' : ''}`}
          onClick={() => onToggleFavorito(juego)}
        >
          {esFavorito ? '♥ Quitar de favoritos' : '♡ Agregar a favoritos'}
        </button>
      </div>
    </article>
  )
}

export default JuegoCard
