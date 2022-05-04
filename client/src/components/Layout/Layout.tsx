import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

export const Layout = () => (
  <div className="Layout">
    <header className="Layout-header">
      <h1 className="header-title">ShopApp</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lists">Lists</Link>
      </nav>
    </header>
    <div className="content">
      <Outlet />
    </div>
  </div>
);
