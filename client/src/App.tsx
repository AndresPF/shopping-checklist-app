import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { Layout } from './components/Layout/Layout';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
