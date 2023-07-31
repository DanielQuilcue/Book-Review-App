import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import libros from '../data/libros.json';
import HashLoader from "react-spinners/HashLoader";
import NavBar from './NavBar';
import InfoProduct from './InfoProduct';
import Footer from './Footer';
import Comentario from './Comentario';
export const ViewProduct = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Busca el libro en el archivo 'libros.json' utilizando el ID proporcionado
      const libroEncontrado = libros.find((libro) => libro.id === id);
      setLibro(libroEncontrado);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <>
      {libro ? (
        <>
          <NavBar />
          <div className="container-md py-20">
            <div className="row mt-4">
              <div className="col-md-6 col-lg-5 mx-auto ">
                <img src={libro.cover} className="img-fluid" alt="Product Image" />
              </div>

              <div className="d-flex justify-content-center flex-column col-md-6 py-3 ">
                <div className='d-flex justify-content-between'>
                  <div className='h3 font-weight-bold mb-2 text-uppercase'>{libro.nombre}</div>
                  <button className='btn btn-outline-danger'><i className="bi bi-heart"></i></button>
                </div>

                <div className="h5 font-weight-bold mb-2">Editorial: <span className='h6 font-weight-medium text-black-50'>{libro.editorial}</span></div>
                <div className="h5 font-weight-bold mb-2">Autor: <span className='h6 font-weight-medium text-black-50'>{libro.autor}</span></div>
                <div className="h5 font-weight-bold mb-2">N.° páginas: <span className='h6 font-weight-medium text-black-50'>{libro.paginas}</span></div>
                <div className="h5 font-weight-bold mb-2">Idioma: <span className='h6 font-weight-medium text-black-50'>{libro.idioma}</span></div>
                <div className="h5 font-weight-bold mb-2">Encuadernación: <span className='h6 font-weight-medium text-black-50'>{libro.encuadernacion}</span></div>

              </div>
            </div>
            <div className='pt-2'>
              <InfoProduct libro={libro} />

            </div>

            <Comentario />
          </div>
          <Footer />
        </>
      ) : (
        <div className='spinner-container'><HashLoader color="#36d7b7" size={90} /></div>
      )}
    </>
  );
};
