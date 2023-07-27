export const getCountryData = async (country: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const result = await response.json();
    console.log(result);
    return {response, result};
};
