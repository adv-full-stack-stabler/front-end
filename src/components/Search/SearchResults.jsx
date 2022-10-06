/* eslint-disable react/prop-types */
import styles from './search.css';
import SearchResultCard from './SearchResultCard';

export default function SearchResults({ results, infiniteScrollRef }) {
  return (<ul className={styles.SearchResults}>
    {results.map((result, i) => {
      const ref = i == results.length - 3 ? infiniteScrollRef : undefined;
      return (<SearchResultCard
        key={result['Species Name'] + i}
        beanie={result}
        infiniteScrollRef={ref} />);
    })}
  </ul>);
}
