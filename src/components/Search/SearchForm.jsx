/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { InputControl, FormButton } from '../forms/FormControls';
import useSearchForm from '../../hooks/search-form';

export default function SearchForm({ onSubmit }) {
  const { beanies, setBeanies, searchForm, setSearchForm } = useSearchForm();
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };
  
  return (<form onSubmit={formSubmit}>
    <InputControl
      type="text"
      name="pokemon"
      value={beanies}
      onChange={e => setBeanies(e.target.value)}
    />
    <FormButton type="submit">Search</FormButton>
  </form>);
}
