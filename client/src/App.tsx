import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/pages/Homepage/Homepage';
import { Layout } from './components/Layout/Layout';
import { ListPage } from './components/pages/ListPage/ListPage';
import { ListsPage } from './components/pages/ListsPage/ListsPage';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="lists" element={<ListsPage />} />
        <Route path="lists/:listId" element={<ListPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
