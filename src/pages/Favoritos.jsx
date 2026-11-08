import JuegoCard from '../components/JuegoCard'

function Favoritos({ favoritos, onToggleFavorito }) {
  return (
    <section className="pagina-juegos container py-5">
      <div className="encabezado-pagina">
        <span className="subtitulo-pagina">TU COLECCIÓN PERSONAL</span>
        <h1>Mis favoritos ♥</h1>
        <p>Aquí encontrarás los videojuegos que has seleccionado.</p>
      </div>

      {favoritos.length === 0 ? (
        <div className="favoritos-vacios">
          <span>♡</span>
          <h2>Aún no tienes favoritos</h2>
          <p>Explora nuestro catálogo y agrega los juegos que más te gusten.</p>
        </div>
      ) : (
        <div className="row g-4">
          {favoritos.map((juego) => (
            <div className="col-12 col-sm-6 col-lg-4" key={juego.id}>
              <JuegoCard
                juego={juego}
                esFavorito={true}
                onToggleFavorito={onToggleFavorito}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Favoritos
