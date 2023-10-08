
import Header from './components/Header/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './styles/reset.css'
import './styles/main.scss'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import { useState } from 'react'

import { createContext } from 'react'

export const SearchContext = createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  )
}

export default App
