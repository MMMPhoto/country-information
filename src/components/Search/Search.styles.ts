import { styled } from 'styled-components';
import { Form } from '@react-md/form';
import { Button } from '@react-md/button';
import { Card } from '@react-md/card';

export const SearchForm = styled(Form)`
  margin: 20px; 
`;

export const SearchButton = styled(Button)`
  margin-top: 20px;
  background-color: #ddd;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const InfoContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 20px;
  padding: 20px;
  width: 50vw;
`;

export const Heading = styled.h2`
  font-size: 20px;
  margin: 0;
`;
