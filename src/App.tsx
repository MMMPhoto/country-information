import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import { AppBar, AppBarTitle } from '@react-md/app-bar';
import './App.css'

interface CountryData {
  commonName: string;
  officialName: string;
  currency: string;
  currencySymbol: string;
  language: string;
  capital: string;
  population: number;
  flagUrl: string;
  flagAlt: string;
  coatOfArmsUrl: string;
}

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    console.log(countryData);
  }, [countryData]);

  return (
    <>
      <AppBar title="Country Information Project">
        <AppBarTitle>Country Information Project</AppBarTitle>
      </AppBar>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        countryData={countryData}
        setCountryData={setCountryData}
      />
      {countryData 
        ?
          <main>
            <p>Common Name: {countryData.commonName}</p>
            <p>Official Name: {countryData.officialName}</p>
            <p>Currency: {countryData.currency}</p>
            <p>Currency Symbol: {countryData.currencySymbol}</p>
            <p>Language: {countryData.language}</p>
            <p>Capital: {countryData.capital}</p>
            <p>Population: {countryData.population}</p>
            <img src={countryData.flagUrl} alt={countryData.flagAlt} />
            <img src={countryData.coatOfArmsUrl} alt={countryData.officialName} />
          </main>
        :  
          <p>No country data found</p>
      }
    </>
  )
}

export default App;
