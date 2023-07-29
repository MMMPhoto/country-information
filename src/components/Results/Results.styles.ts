import { styled } from 'styled-components';
import { Card } from '@react-md/card';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 20px;
  padding: 20px;
  width: 100vw;
  @media (min-width: 600px) {
    width: 50vw;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Info = styled.p`
  padding-left: 40px;
`;

export const ImageContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20px 20px 20px;
  padding: 20px;
  width: 100vw;
  @media (min-width: 600px) {
    width: 50vw;
  }
`;

export const Flag = styled.img`
  width: 50%;
  margin: 20px 20px;
`;

export const CoatOfArms = styled.img`
  width: 50%;
  margin: 20px 20px;
`;
