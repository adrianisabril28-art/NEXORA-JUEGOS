import JuegoCard from '../components/JuegoCard'

function CatalogoJuegos({ juegos, favoritos, onToggleFavorito }) {
  return (
    <section className="pagina-juegos container py-5">
      <div className="encabezado-pagina">
        <span className="subtitulo-pagina">NEXORA GAMING</span>
        <h1>Catálogo de videojuegos</h1>
        <p>Explora nuestra colección y descubre tu próxima aventura.</p>
      </div>

      <div className="row g-4">
        {juegos.map((juego) => (
          <div className="col-12 col-sm-6 col-lg-4" key={juego.id}>
            <JuegoCard
              juego={juego}
              esFavorito={favoritos.some(
                (favorito) => favorito.id === juego.id
              )}
              onToggleFavorito={onToggleFavorito}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CatalogoJuegos
