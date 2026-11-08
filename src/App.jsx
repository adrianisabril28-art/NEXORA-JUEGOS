import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedGames from './components/FeaturedGames'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

import CatalogoJuegos from './pages/CatalogoJuegos'
import Favoritos from './pages/Favoritos'

import { juegos } from './data/juegos'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  // Estado global de videojuegos favoritos
  const [favorites, setFavorites] = useState([])

  // Agregar o quitar videojuegos de favoritos
  const toggleFavorite = (juego) => {
    setFavorites((prevFavorites) => {
      const existe = prevFavorites.some(
        (favorito) => favorito.id === juego.id
      )

      if (existe) {
        return prevFavorites.filter(
          (favorito) => favorito.id !== juego.id
        )
      }

      return [...prevFavorites, juego]
    })
  }

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                <Categories
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                />

                <FeaturedGames
                  selected={selectedCategory}
                />

                <NewsSection />
              </>
            }
          />

          {/* Catálogo de videojuegos */}
          <Route
            path="/catalogo"
            element={
              <CatalogoJuegos
                juegos={juegos}
                favoritos={favorites}
                onToggleFavorito={toggleFavorite}
              />
            }
          />

          {/* Mis videojuegos favoritos */}
          <Route
            path="/favoritos"
            element={
              <Favoritos
                favoritos={favorites}
                onToggleFavorito={toggleFavorite}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
