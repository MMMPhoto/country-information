import { CurrencyData } from "./CurrencyData";

export type CountryData = {
  commonName: string;
  officialName: string;
  currencyData: CurrencyData[];
  languages: string[];
  capital: string;
  population: number;
  flagUrl: string | null;
  flagAlt: string | null;
  coatOfArmsUrl: string | null;
};
