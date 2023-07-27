import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
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
        setCountryData={setCountryData}
      />
      <Results
        countryData={countryData}
      />
    </>
  )
}

export default App;
