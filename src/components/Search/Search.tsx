import { useRef, Dispatch, SetStateAction, FormEvent } from 'react';
import { CountryData } from '../../types/CountryData';
import { getCountryData } from '../../utils/api';
import { TextField } from '@react-md/form';
import { SearchForm, SearchButton } from './Search.styles';

const Search = ({searchTerm, setSearchTerm, setResponseObject, setCountryData} : {
  searchTerm: string, 
  setSearchTerm: Dispatch<SetStateAction<string>>, 
  setResponseObject: Dispatch<SetStateAction<Response | null>>,
  setCountryData: Dispatch<SetStateAction<CountryData | null>>
}) => { 

  const searchRef = useRef(null);

  const handleFormSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      try {
        const apiResponse = await getCountryData(searchTerm);
        const { response, result } = apiResponse;
        setResponseObject(response);
        console.log(result);
        
        if (response.ok) {
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
        } else {
          setCountryData(null);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SearchForm ref={searchRef}>
      <TextField
        id='text-search'
        type='text'
        label='Search for a country'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <SearchButton
        id='submit' 
        type='submit'
        onClick={handleFormSubmit}
      >
        Search
      </SearchButton>
    </SearchForm>
  )
}

export default Search;
