import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

export const Layout = () => (
  <div className="Layout">
    <h1>ShopApp</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <div className="content">
      <Outlet />
    </div>
  </div>
);
