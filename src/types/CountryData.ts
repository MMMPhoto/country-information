import { CurrencyData } from "./CurrencyData";

export type CountryData = {
  commonName: string;
  officialName: string;
  currencyData: CurrencyData[];
  languages: string[];
  capital: string;
  population: number;
  flagUrl: string;
  flagAlt: string;
  coatOfArmsUrl: string;
};
