import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { search } from '../services/beanie-babies';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const useableSearchParams = Object.fromEntries(searchParams.entries());

  const nextPage = async () => {
    useableSearchParams.page = parseInt(useableSearchParams.page) + 1;
    setSearchParams(useableSearchParams);
    const moreResults = await search(useableSearchParams);
    setSearchResults(searchResults.concat(moreResults.results));
  };

  const infiniteScrollRef = useInView({
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) nextPage();
    }
  }).ref;

  const searchBeanies = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);

    try {
      const body = await search(searchObj);
      setSearchResults(body.results);
    } catch (e) {
      setError(`Error searching fish: ${e.body}`);
      throw error;
    }
  };

  useEffect(() => void searchBeanies(useableSearchParams), []);

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    searchBeanies,
    infiniteScrollRef
  };
}
