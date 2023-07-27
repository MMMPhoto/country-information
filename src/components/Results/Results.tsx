import { CountryData } from '../../types/CountryData';
import { Container, InfoContainer, ImageContainer, Flag, CoatOfArms } from './styles';

const Results = ({countryData} : {countryData: CountryData | null}) => { 

  return (
    <Container>
      {countryData 
        ?
          <InfoContainer>
            <p>Common Name: {countryData.commonName}</p>
            <p>Official Name: {countryData.officialName}</p>
            <p>Currency: {countryData.currency}</p>
            <p>Currency Symbol: {countryData.currencySymbol}</p>
            <p>Language: {countryData.language}</p>
            <p>Capital: {countryData.capital}</p>
            <p>Population: {countryData.population}</p>
          </InfoContainer>
        :  
          <InfoContainer>No country data found</InfoContainer>
      }

      {countryData
        ?
          <ImageContainer>
            <Flag src={countryData.flagUrl} alt={countryData.flagAlt} />
            <CoatOfArms src={countryData.coatOfArmsUrl} alt={countryData.officialName} />
          </ImageContainer>
        :
          <ImageContainer></ImageContainer>
      }
    </Container>

  )
}

export default Results;
