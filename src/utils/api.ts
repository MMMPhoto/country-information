export const getCountryData = async (country: string) => {
    console.log("hitting util")
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(response);
    const data = await response.json();
    return data;
};
