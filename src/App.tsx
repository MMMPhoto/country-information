import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import { CountryData } from './types/CountryData';
import { AppBar, AppBarTitle } from '@react-md/app-bar';
import './App.css'

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    console.log(countryData);
  }, [countryData]);

  return (
    <>
      <AppBar>
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
