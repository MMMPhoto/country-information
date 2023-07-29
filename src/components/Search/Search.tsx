import { useState, useRef, useEffect, Dispatch, SetStateAction, FormEvent } from 'react';
import { CountryData } from '../../types/CountryData';
import { getCountryData } from '../../utils/api';
import { TextField } from '@react-md/form';
import { SearchForm, SearchButton, Container, InfoContainer, Heading } from './Search.styles';

const Search = ({searchTerm, setSearchTerm, setResponseObject, areMultipleResults, setAreMultipleResults, setCountryData} : {
  searchTerm: string, 
  setSearchTerm: Dispatch<SetStateAction<string>>, 
  setResponseObject: Dispatch<SetStateAction<Response | null>>,
  areMultipleResults: boolean,
  setAreMultipleResults: Dispatch<SetStateAction<boolean>>,
  setCountryData: Dispatch<SetStateAction<CountryData | null>>
}) => { 

  const [results, setResults] = useState<any[]>([]);
  const [chosenCountryIndex, setChosenCountryIndex] = useState<number>(-1);

  const searchRef = useRef(null);

  const buildCountryDataObject = (chosenCountry: any) => {

    // Get country name, population, flag url, and flag alt
    const { 
      name: {common},
      name: {official},
      population,
      flags: {png},
      flags: {alt}, 
    } = chosenCountry;
    const commonName = common;
    const officialName = official;
    const flagUrl = png;
    const flagAlt = alt;

    // Get currency name and symbol
    const currencyObject = chosenCountry.currencies;
    const currencyNames = Object.keys(currencyObject);
    const arrayOfCurrencies = currencyNames.map(currency => ({key: currency, value: currencyObject[currency]}));
    const currencyData = arrayOfCurrencies.map(currency => {
      const {
        value: {name},
        value: {symbol},
      } = currency;
      return {name, symbol};
    });

    // Get languages
    const languageObject = chosenCountry.languages;
    const languageNames = Object.keys(languageObject);
    const languageData = languageNames.map(language => ({key: language, value: languageObject[language]}));
    const languages = languageData.map(language => language.value);

    // Get capital
    const capital = chosenCountry.capital === undefined ? "No capital given.": chosenCountry.capital[0];

    // Get coat of arms
    const coatOfArms = chosenCountry.coatOfArms.png;

    // Set CountryData state
    setCountryData({
      commonName: commonName,
      officialName: officialName,
      currencyData: currencyData,
      languages: languages,
      capital: capital,
      population: population,
      flagUrl: flagUrl,
      flagAlt: flagAlt,
      coatOfArmsUrl: coatOfArms
    });  
  };

  useEffect(() => {
    if (chosenCountryIndex >= 0) {
      console.log(chosenCountryIndex);
      console.log(results[chosenCountryIndex]);
      buildCountryDataObject(results[chosenCountryIndex]);
    }
  }, [chosenCountryIndex]);

  const handleFormSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      try {
        const apiResponse = await getCountryData(searchTerm);
        const { response, result } = apiResponse;
        setResponseObject(response);
        
        if (response.ok) {
          if (result.length === 1) {
            buildCountryDataObject(result[0]);
            setAreMultipleResults(false);
          } else {
            setAreMultipleResults(true);
            setResults(result);
          }
        } else {
          setCountryData(null);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
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
      {areMultipleResults 
        ? 
          <Container>
            <InfoContainer>
              <Heading>There are multiple results for your search. Please choose one:</Heading>
              {results.map((result, index) => (
                <SearchButton
                  key={index}
                  onClick={() => {
                    setChosenCountryIndex(index);
                    setAreMultipleResults(false);
                  }}
                >
                  {result.name.common}
                </SearchButton>
              ))}
            </InfoContainer>
          </Container>
          
        :
          <></>  
        
      }
    </div>
  )
}

export default Search;
