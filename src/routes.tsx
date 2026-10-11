import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute'
import PublicLayout from './layouts/PublicLayout'
import AdminProducts from './pages/AdminProducts'
import AdminProductForm from './pages/AdminProductForm'
import Cart from './pages/Cart'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/produtos',
        element: <Products />,
      },
      {
        path: '/produtos/:id',
        element: <ProductDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/admin',
            element: <Admin />,
          },
          {
            path: '/admin/produtos',
            element: <AdminProducts />,
          },
          {
            path: '/admin/produtos/novo',
            element: <AdminProductForm />,
          },
          {
            path: '/admin/produtos/editar/:id',
            element: <AdminProductForm />,
          },
          {
            path: '/carrinho',
            element: <Cart />,
          },
        ],
      },
    ],
  },
])