import { Outlet, Link } from 'react-router-dom';
import style from './Automobiles.css';

export default function Automobiles() {
  return (
    <div>
      <h1 className={style.Automobiles}>Automobiles</h1>
      <nav>
        <Link to="">Koenigsegg</Link>
        <Link to="bugatti">Bugatti</Link>
        <Link to="hennessy">Hennessy</Link>
      </nav>
      <Outlet />
    </div>
  );
}
