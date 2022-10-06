import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function searchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const useSearch = Object.fromEntries(searchParams.entries());
  const [beanies, setBeanies] = useState(useSearch.beanies || '');

  return { beanies, searchForm: useSearch, 
    setBeanies, setSearchForm: setSearchParams };
}
