import logoLogin from '../assets/libro.png'
import login from '../assets/login.jpg'

export const LogIn = () => {
  return (
    <>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0 bodyLogIn">
        <div className="container">
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={login}
                  alt="login"
                  className="login-card-img"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <div className="brand-wrapper">
                    <img
                      src={logoLogin}
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  <p className="login-card-description">
                    Iniciar Sesión
                  </p>
                  <form action="#!">
                    <div className="form-group">
                      <label form="email" className="sr-only">
                        Correo
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Correo"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label form="password" className="sr-only">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Contraseña"
                      />
                    </div>
                    <input
                      name="login"
                      id="login"
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      value="Iniciar Sesión"
                    />
                  </form>
                  <a href="#!" className="forgot-password-link">
                  ¿Ha olvidado su contraseña?                  
                  </a>
                  <p className="login-card-footer-text">
                    ¿No tiene cuenta?{" "}
                    <a href="#!" className="text-reset">
                      Regístrese aquí
                    </a>
                  </p>
                  <nav className="login-card-footer-nav">
                    <a href="#!">Condiciones de uso, política de privacidad</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
