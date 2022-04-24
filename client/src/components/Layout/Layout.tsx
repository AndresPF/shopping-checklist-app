import { Link, Outlet } from 'react-router-dom';

export const Layout = () => (
  <div>
    <h1>Welcome to the app!</h1>
    <nav>
      <Link to="invoices">Invoices</Link> |{' '}
      <Link to="dashboard">Dashboard</Link>
    </nav>
    <div className="content">
      <Outlet />
    </div>
  </div>
);
