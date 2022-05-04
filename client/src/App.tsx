import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { Layout } from './components/Layout/Layout';
import { List } from './components/List/List';
import { Lists } from './components/Lists/Lists';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="lists" element={<Lists />} />
        <Route path="lists/:listId" element={<List />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
