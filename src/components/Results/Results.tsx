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
            <Heading>Currency:</Heading>
            <p>{countryData.currency}</p>
            <Heading>Currency Symbol:</Heading>
            <p>{countryData.currencySymbol}</p>
            <Heading>Language:</Heading>
            <p>{countryData.language}</p>
            <Heading>Capital:</Heading>
            <p>{countryData.capital}</p>
            <Heading>Population:</Heading>
            <p>{countryData.population}</p>
          </InfoContainer>
        :  
          <InfoContainer>
            {responseObject && !responseObject?.ok 
              ?
                <div>
                  <Heading>Something went wrong!</Heading>
                  <p>Status: {responseObject.status} {responseObject.statusText}</p>
                </div>
              :
                <></>
            } 
          </InfoContainer>
      }

      {countryData
        ?
          <ImageContainer>
            <Flag src={countryData.flagUrl} alt={countryData.flagAlt} />
            <CoatOfArms src={countryData.coatOfArmsUrl} alt={`Coat of Arms of ${countryData.officialName}`} />
          </ImageContainer>
        :
          <ImageContainer></ImageContainer>
      }
    </Container>

  )
}

export default Results;
