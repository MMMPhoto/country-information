
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

const Results = ({countryData} : {countryData: CountryData | null}) => { 

  return (
    <main>
      {countryData 
        ?
          <div>
            <p>Common Name: {countryData.commonName}</p>
            <p>Official Name: {countryData.officialName}</p>
            <p>Currency: {countryData.currency}</p>
            <p>Currency Symbol: {countryData.currencySymbol}</p>
            <p>Language: {countryData.language}</p>
            <p>Capital: {countryData.capital}</p>
            <p>Population: {countryData.population}</p>
            <img src={countryData.flagUrl} alt={countryData.flagAlt} />
            <img src={countryData.coatOfArmsUrl} alt={countryData.officialName} />
          </div>
        :  
          <p>No country data found</p>
      }
    </main>

  )
}

export default Results;
