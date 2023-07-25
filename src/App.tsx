import { useState } from 'react';
import Search from './components/Search/Search';
import { AppBar, AppBarTitle } from '@react-md/app-bar';
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <>
      <AppBar title="Country Information Project">
        <AppBarTitle>Country Information Project</AppBarTitle>
      </AppBar>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <p>Search term: {searchTerm}</p>
    </>
  )
}

export default App;
