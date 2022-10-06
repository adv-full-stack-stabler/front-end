import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Layout from './Page/Layout';
import Planes from './Planes/Planes';
import Trains from './Trains/Trains';
import Search from './Search/Search.jsx';
import Automobiles from './Automobiles/Automobiles';
import Koenigsegg from './Automobiles/Koenigsegg';
import Bugatti from './Automobiles/Bugatti';
import Hennessy from './Automobiles/Hennessy';

export default function App() {
  return (<Router> 
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<Search />} />
        <Route path="planes" element={<Planes />} />
        <Route path="trains" element={<Trains />} />
        <Route path="automobiles" element={<Automobiles />} >
          <Route index element={<Koenigsegg />} />
          <Route path="bugatti" element={<Bugatti />} />
          <Route path="hennessy" element={<Hennessy />} />
        </Route>
      </Route>
    </Routes>
  </Router>);
}
