import { CountryData } from '../../types/CountryData';
import { Container, InfoContainer, Heading, ImageContainer, Flag, CoatOfArms } from './Results.styles';

const Results = ({countryData, responseObject} : {countryData: CountryData | null, responseObject: Response | null}) => { 

  return (
    <Container>
      {countryData 
        ?
          <InfoContainer>
            <Heading>Common Name:</Heading>
            <p>{countryData.commonName}</p>
            <Heading>Official Name:</Heading>
            <p>{countryData.officialName}</p>
            <Heading>{countryData.currencyData.length > 1 ? 'Currencies:' : 'Currency:'}</Heading>
            <ul style={{listStyle: 'none'}}>
              {countryData.currencyData.map(currency => <li key={currency.name}>{currency.name} ({currency.symbol})</li>)}
            </ul>
            <Heading>{countryData.languages.length > 1 ? 'Languages:' : 'Language:'}</Heading>
            <ul style={{listStyle: 'none'}}>
              {countryData.languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <Heading>Capital:</Heading>
            <p>{countryData.capital}</p>
            <Heading>Population:</Heading>
            <p>{countryData.population}</p>
          </InfoContainer>
        :
          <></>
      }
      {responseObject && !responseObject?.ok 
        ?
          <InfoContainer>
            <Heading>Something went wrong!</Heading>
            <p>Status: {responseObject.status} {responseObject.statusText}. <br />{responseObject.status === 404 ? 'Please revise your search term and try again.' : ''}</p>
          </InfoContainer>
        :
          <></>
      } 
      {countryData
        ?
          <ImageContainer>
            <Flag src={countryData.flagUrl} alt={countryData.flagAlt} />
            <CoatOfArms src={countryData.coatOfArmsUrl} alt={`Coat of Arms of ${countryData.officialName}`} />
          </ImageContainer>
        :
          <></>
      }
    </Container>

  )
}

export default Results;
