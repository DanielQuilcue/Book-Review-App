import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">Daniel Quilcue</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Colombia, Bogotá</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-outline-success">Editar</button>
                    <Link to="/mainBook">
                    <button type="button" className="btn btn-outline-dark ms-1">Inicio</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-2">
                  <p className="text-center mt-2"><span className="text-primary font-italic me-1">Redes</span> Sociales
                  </p>
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="bi bi-twitter twitter"></i>
                      <p className="mb-0">@twitter</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="bi bi-instagram instagram"></i>
                      <p className="mb-0">@instagram</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="bi bi-facebook facebook" style={{ color: "#3b5998;" }}></i>
                      <p className="mb-0">@facebook</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Nombre Completo</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Daniel Quilcue</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Correo</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Celular</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">+57 2345678123</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Dirección</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Soy una dirección</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">País</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Colombia, Bogotá</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="text-center"><span className="text-primary font-italic me-1">Categorías</span>Leías
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem;" }}>INFANTILES</p>
                      <div className="progress rounded" style={{ height: "5px;" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>JUVENILES</p>
                      <div className="progress rounded" style={{ height: "5px;" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>LITERATURA</p>
                      <div className="progress rounded" style={{ height: "5px;" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>COMIC</p>
                      <div className="progress rounded" style={{ height: "5px;" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0 align-items-center ">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">Libros</span>Leidos
                      </p>
                      <div style={{ width: 240, height: 240 }}>
                        <CircularProgressbar
                          styles={buildStyles({
                            pathColor: '#3B82F6',
                            trailColor: '#F5F5F5'
                          })}
                          // value={porcentaje}
                          value={10}
                          text={`${10} % Leido`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile