import { CountryData } from '../../types/CountryData';
import { Container, InfoContainer, Heading, Info, ImageContainer, Flag, CoatOfArms } from './Results.styles';

const Results = ({countryData, responseObject} : {countryData: CountryData | null, responseObject: Response | null}) => { 

  return (
    <Container>
      {countryData 
        ?
          <InfoContainer>
            <Heading>Common Name:</Heading>
            <Info>{countryData.commonName}</Info>
            <Heading>Official Name:</Heading>
            <Info>{countryData.officialName}</Info>
            <Heading>{countryData.currencyData.length > 1 ? 'Currencies:' : 'Currency:'}</Heading>
            {countryData.currencyData.length > 0
              ?
                <ul style={{listStyle: 'none'}}>
                  {countryData.currencyData.map(currency => <li key={currency.name}>{currency.name} ({currency.symbol})</li>)}
                </ul>
              :
                <Info>No currency given.</Info>
            }
            <Heading>{countryData.languages.length > 1 ? 'Languages:' : 'Language:'}</Heading>
            {countryData.languages.length > 0
              ?
                <ul style={{listStyle: 'none'}}>
                  {countryData.languages.map(language => <li key={language}>{language}</li>)}
                </ul>
              :
                <Info>No language given.</Info> 
            }   
            <Heading>Capital:</Heading>
            <Info>{countryData.capital}</Info>
            <Heading>Population:</Heading>
            <Info>{countryData.population}</Info>
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
            {countryData.flagUrl && <Flag src={countryData.flagUrl!} alt={countryData.flagAlt!} />}
            {countryData.coatOfArmsUrl && <CoatOfArms src={countryData.coatOfArmsUrl!} alt={`Coat of Arms of ${countryData.officialName}`} />}
          </ImageContainer>
        :
          <></>
      }
    </Container>

  )
}

export default Results;
