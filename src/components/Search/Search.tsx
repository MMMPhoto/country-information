import { useRef, Dispatch, SetStateAction, FormEvent } from 'react';
import { Form, TextField } from '@react-md/form';
import { Button } from '@react-md/button';
import { getCountryData } from '../../utils/api';

interface CountryData {
  commonName: string;
  officialName: string;
  currency: string;
  currencySymbol: string;
  language: string;
  capital: string;
  population: number;
  flagUrl: string;
  coatOfArmsUrl: string;
}

const Search = ({searchTerm, setSearchTerm, countryData, setCountryData} : {searchTerm: string, setSearchTerm: Dispatch<SetStateAction<string>>, countryData: CountryData, setCountryData: Dispatch<SetStateAction<CountryData>>}) => { 

  const searchRef = useRef(null);

  const handleFormSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      try {
        const result = await getCountryData(searchTerm);
        console.log(result);
        const { 
          name: {common},
          name: {offical},
          //  currencySymbol, language, capital, population, flagUrl, coatOfArmsUrl
        } = result[0];
        const currencyObject = result[0].currencies;
        const currencyNames = Object.keys(currencyObject);
        const arrayOfCurrencies = currencyNames.map(currency => ({key: currency, value: currencyObject[currency]}));
        console.log(arrayOfCurrencies);

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
