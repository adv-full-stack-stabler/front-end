import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/search-results.js';
import { FormButton } from '../forms/FormControls.jsx';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    beanies,
    setBeanies,
    searchResults,
    searchBeanies
  } = useSearchResults();

  return (<section>
    <SearchForm beanies={beanies} 
      setBeanies={setBeanies} onSubmit={searchBeanies}/>
    <SearchResults results={searchResults} 
      infiniteScrollRef={infiniteScrollRef}/>
    <FormButton onClick={nextPage}>More Beanies</FormButton>
  </section>);
}

