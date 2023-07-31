
import NavBar from '../components/NavBar';
import StarRating from '../components/StarRating'
import libros from '../data/libros.json'
import { BrowserRouter as  Routes, Route, Link } from "react-router-dom";
import Footer from '../components/Footer';
export default function MainBook() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };
  return (
    <>
    <NavBar />
      <div className="container-fluid mt-3">
        <div className="px-lg-5">
          <div className="row">
            {libros.map((libros) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={libros.id}>
              <Link to={`/BookDetails/${libros.id}`}>
                <div className="bg-white rounded shadow-sm">
                  <img src={libros.cover} alt={libros.nombre} className="img-fluid card-img-top" />
                  <div className="p-4">
                    <h5 className="text-dark">{libros.nombre}</h5>
                    <p className="small text-muted mb-0">{truncateText(libros.descripcion, 150)}</p>                    
                    <StarRating/>
                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                      <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">Genero</span></p>
                      <div className="badge badge-danger px-3 rounded-pill font-weight-normal">{libros.categoria}</div>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}
