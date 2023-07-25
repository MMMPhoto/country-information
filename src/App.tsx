import { useState } from 'react';
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
  coatOfArmsUrl: string;
}

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [countryData, setCountryData] = useState<CountryData | null>(null); 

  return (
    <>
      <AppBar title="Country Information Project">
        <AppBarTitle>Country Information Project</AppBarTitle>
      </AppBar>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        // countryData={countryData}
        // setCountryData={setCountryData}
      />
      <p>Search term: {searchTerm}</p>
    </>
  )
}

export default App;
