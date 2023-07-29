import { 
  // useEffect, 
  useState
} from 'react';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import { CountryData } from './types/CountryData';
import { AppBar, AppBarTitle } from '@react-md/app-bar';
import './App.css'

const App = () => {

  const [responseObject, setResponseObject] = useState<Response | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [areMultipleResults, setAreMultipleResults] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  // useEffect(() => {
  //   console.log(countryData);
  // }, [countryData]);

  // useEffect(() => {
  //   console.log(responseObject);
  // }, [responseObject]);

  return (
    <>
      <AppBar style={{backgroundColor: '#9ffafa'}}>
        <AppBarTitle style={{color: '#000'}}>Country Information Project</AppBarTitle>
      </AppBar>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setResponseObject={setResponseObject}
        areMultipleResults={areMultipleResults}
        setAreMultipleResults={setAreMultipleResults}
        setCountryData={setCountryData}
      />
      <Results
        responseObject={responseObject}
        areMultipleResults={areMultipleResults}
        countryData={countryData}
      />
    </>
  )
}

export default App;
