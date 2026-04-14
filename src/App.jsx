import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// ==============================
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
// ==============================
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import FavPage from './pages/FavPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <HomePage />},

      {path: 'catalog', element: <CatalogPage />},
      {path: 'catalog/:category', element: <CatalogPage />},

      {path: 'item/:id', element: <ItemPage />},
      {path: 'cart', element: <CartPage />},
      {path: 'favorites', element: <FavPage />},
      {path: 'about', element: <AboutPage />},
      {path: 'profile', element: <ProfilePage />},
      {path: 'login', element: <LoginPage />}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App