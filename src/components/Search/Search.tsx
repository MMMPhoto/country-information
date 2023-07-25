import { useRef, Dispatch, SetStateAction } from 'react';
import { Form, TextField } from '@react-md/form';
import { Button } from '@react-md/button';

const Search = ({searchTerm, setSearchTerm} : {searchTerm: string, setSearchTerm: Dispatch<SetStateAction<string>>}) => { 

  const searchRef = useRef(null);

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
        >
          Search
        </Button>
      </Form>
    </>
  )
}

export default Search;
