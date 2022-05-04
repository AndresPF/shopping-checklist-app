import { Link, Outlet } from 'react-router-dom';
import 'bootstrap';
import './Layout.scss';

export const Layout = () => (
  <div className="Layout">
    <header className="Layout-header">
      {/* <h1 className="header-title">ShopApp</h1> */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">ShopApp</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lists">
                  Lists
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div className="content">
      <Outlet />
    </div>
  </div>
);
