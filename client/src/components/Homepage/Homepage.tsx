import { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import './Homepage.scss';

export const Homepage = () => {
  useEffect(() => {
    fetch('/test')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <img src={logo} className="Homepage-logo" alt="logo" />
        <p>
          Edit <code>src/Homepage.tsx</code> and save to reload.
        </p>
        <a
          className="Homepage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
