import './App.css'
import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'
import ProductPage from './page/ProductPage'
import ProductDetailPage from './page/ProductDetailPage'
import LoginPage from './page/LoginPage'
import UserPage from './page/UserPage'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [auth,setAuth] = useState(false)
  const ProvateRoute = () => {
    return auth === true ? <UserPage /> : <Navigate to='/login' />
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<ProvateRoute />} />
      </Routes>
    </div>
  )
}

export default App
