import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LogIn } from './components/LogIn.jsx';
import MainBook from './pages/MainBook.jsx';
import Profile from './pages/Profile.jsx';
import { ViewProduct } from './components/ViewProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />
  },
  {
    path: '/MainBook',
    element: <MainBook/>
  },
  {
    path: '/Profile',
    element: <Profile/>
  },
  {
    path: '/BookDetails/:id',
    element: <ViewProduct/>
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
