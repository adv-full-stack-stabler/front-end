import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (<nav className={styles.Navigation}>
    <NavLink to="">Home</NavLink>
    <NavLink to="search">Search Beanie Babaies</NavLink>
    <NavLink to="planes">Planes</NavLink>
    <NavLink to="trains">Trains</NavLink>
    <NavLink to="automobiles">Automobiles</NavLink>
  </nav>);
}
