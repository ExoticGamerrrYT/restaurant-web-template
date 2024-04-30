import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RestaurantInfo from './components/RestaurantInfo'

const App: React.FC = () => {
  // Cambia estos valores según el restaurante
  const restaurantName = 'Mi Restaurante'
  const restaurantLocation = 'Calle Principal, Ciudad'
  const restaurantMenu = ['Plato 1', 'Plato 2', 'Plato 3']

  return (
    <div className="app">
      <Header title={restaurantName} />
      <RestaurantInfo name={restaurantName} location={restaurantLocation} menu={restaurantMenu} />
      <Footer />
    </div>
  )
}

export default App
