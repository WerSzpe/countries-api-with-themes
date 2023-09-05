import { useEffect, useState } from 'react';

import './App.css';

import Navbar from './Navbar';
import SearchBox from './SearchBox';
import FilerBox from './FilerBox';
import CountryCard from './CountryCard';


function App() {

  const [countryList, setCountryList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";

    const fetchCountryList = async () => {

      try{
        const res = await fetch(url);
        const data = await res.json();
        setCountryList(data);
        console.log(data)
      } catch (e){
        setError(e);
      }
      
    };

    fetchCountryList();

  }, [])

  return (
    <div className="App">
      <Navbar />
      <SearchBox />
      <FilerBox />

      {countryList != null ? (
      countryList.map((country, index) => {
        return (
          <div key={index+"d"}>
            <CountryCard flag = {country.flag} 
                          name={country.name.common}
                          population={country.population}
                          region={country.region}
                          capital={country.capital} />
          </div>
        )
      })) : 
       {error}
      }

    </div>
  );
}

export default App;
