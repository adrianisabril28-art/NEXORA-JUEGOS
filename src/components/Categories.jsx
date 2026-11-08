const categories = [
  'Todos',
  'Acción',
  'Aventura',
  'Carreras',
  'Deportes'
]

function Categories({ selected, onSelect }) {
  return (
    <section className="categories-section" id="categorias">
      <h2>EXPLORA POR CATEGORÍA</h2>

      <p>Encuentra el universo que más te gusta.</p>

      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selected === category ? 'category active' : 'category'
            }
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories
