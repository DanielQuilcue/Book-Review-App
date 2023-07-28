import login from '../assets/fantasy.webp'
import logoLogin from '../assets/libro.png'
export const SignUp = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 login-section-wrapper">
              <div className="brand-wrapper">
                <img src={logoLogin} alt="logo" className="logo" />
              </div>
              <div className="login-wrapper my-auto">
                <h1 className="login-title">Iniciar sesión</h1>
                <form action="#!">
                  <div className="form-group">
                    <label form="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="email@example.com"
                    />
                    
                  </div>
                  <div className="form-group mb-4">
                    <label form="password">Contraseña</label>
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
                    className="btn btn-block login-btn"
                    type="button"
                    value="Iniciar Sesión"
                  />
                </form>
                <a href="#!" className="forgot-password-link">
                ¿Olvidaste tu contraseña?
                </a>
                <p className="login-wrapper-footer-text">
                ¿No tienes una cuenta?{" "}
                  <a href='$!' className="text-reset">
                  Registrar aquí
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={login}
                alt="login image"
                className="login-img"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
