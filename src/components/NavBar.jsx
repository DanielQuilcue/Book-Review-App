import { useState } from 'react';
import logo from '../assets/libro.png';
import { Link } from "react-router-dom";
export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to='/mainBook' className="navbar-brand mt-2 mt-lg-0" >
              <img
                src={logo}
                height="40"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/mainBook" className="nav-link">
                Book Review
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Infantiles</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Juveniles</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Comic</a></li>
                </ul>
              </li>

            </ul>
            <form className="w-auto mx-3">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </form>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <Link to="/Profile" className='dropdown-item'>
                  Perfil
                </Link>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Link to="/" className='dropdown-item'>
                  Cerrar Sesión
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}