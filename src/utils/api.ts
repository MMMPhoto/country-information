export const getCountryData = async (country: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(response);
    const data = await response.json();
    return data;
};
