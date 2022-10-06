/* eslint-disable react/prop-types */
import styles from './search.css';
export default function SearchResultCard({ beanie, infiniteScrollRef }) {
  return (<li className={styles.SearchResultCard} ref={infiniteScrollRef}>
    {beanie.pokemon}
    <img src={beanie.url_image} />
  </li>);
}
