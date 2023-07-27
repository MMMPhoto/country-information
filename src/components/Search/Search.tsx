import { useRef, Dispatch, SetStateAction, FormEvent } from 'react';
import { CountryData } from '../../types/CountryData';
import { getCountryData } from '../../utils/api';
import { Form, TextField } from '@react-md/form';
import { Button } from '@react-md/button';

const Search = ({searchTerm, setSearchTerm, setCountryData} : {searchTerm: string, setSearchTerm: Dispatch<SetStateAction<string>>, setCountryData: Dispatch<SetStateAction<CountryData | null>>}) => { 

  const searchRef = useRef(null);

  const handleFormSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      try {
        const result = await getCountryData(searchTerm);
        console.log(result);

        // Get country name, population, flag url, and flag alt
        const { 
          name: {common},
          name: {official},
          population,
          flags: {png},
          flags: {alt}, 
        } = result[0];
        const commonName = common;
        const officialName = official;
        const flagUrl = png;
        const flagAlt = alt;

        // Get currency name and symbol
        const currencyObject = result[0].currencies;
        const currencyNames = Object.keys(currencyObject);
        const arrayOfCurrencies = currencyNames.map(currency => ({key: currency, value: currencyObject[currency]}));
        const {
          value: {name},
          value: {symbol}
        } = arrayOfCurrencies[0];
        const currency = name;
        const currencySymbol = symbol;

        // Get language
        const languageObject = result[0].languages;
        const languageNames = Object.keys(languageObject);
        const arrayOfLanguages = languageNames.map(language => ({key: language, value: languageObject[language]}));
        const {
          value
        } = arrayOfLanguages[0];
        const language = value;

        // Get capital
        const capital = result[0].capital[0];

        // Get coat of arms
        const coatOfArms = result[0].coatOfArms.png;

        // Set CoutnryData state
        setCountryData({
          commonName: commonName,
          officialName: officialName,
          currency: currency,
          currencySymbol: currencySymbol,
          language: language,
          capital: capital,
          population: population,
          flagUrl: flagUrl,
          flagAlt: flagAlt,
          coatOfArmsUrl: coatOfArms
        });

      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
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
  )
}

export default Search;
