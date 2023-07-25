import { useRef, Dispatch, SetStateAction, FormEvent } from 'react';
import { Form, TextField } from '@react-md/form';
import { Button } from '@react-md/button';
import { getCountryData } from '../../utils/api';

const Search = ({searchTerm, setSearchTerm} : {searchTerm: string, setSearchTerm: Dispatch<SetStateAction<string>>}) => { 

  const searchRef = useRef(null);

  const handleFormSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      try {
        const result = await getCountryData(searchTerm);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Form ref={searchRef}>
        <TextField
          id='text-search'
          type='text'
          label='Search for a country'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <Button 
          id='submit' 
          type='submit'
          onClick={handleFormSubmit}
        >
          Search
        </Button>
      </Form>
    </>
  )
}

export default Search;
