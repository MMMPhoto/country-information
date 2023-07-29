export const buildCountryDataObject = (chosenCountry: any) => {

    // Get country name, population, flag url, and flag alt
    const { 
      name: {common},
      name: {official},
      population,
      flags: {png},
      flags: {alt}, 
    } = chosenCountry;
    const commonName = common;
    const officialName = official;
    const flagUrl = png;
    const flagAlt = alt;

    // Get currency name and symbol
    const currencyObject = chosenCountry.currencies;
    const currencyNames = Object.keys(currencyObject);
    const arrayOfCurrencies = currencyNames.map(currency => ({key: currency, value: currencyObject[currency]}));
    const currencyData = arrayOfCurrencies.map(currency => {
      const {
        value: {name},
        value: {symbol},
      } = currency;
      return {name, symbol};
    });
    console.log(currencyData);


    // Get languages
    const languageObject = chosenCountry.languages;
    const languageNames = Object.keys(languageObject);
    const languageData = languageNames.map(language => ({key: language, value: languageObject[language]}));
    const languages = languageData.map(language => language.value);

    // Get capital
    console.log(chosenCountry.capital);
    const capital = chosenCountry.capital === undefined ? "No capital given.": result[0].capital[0];

    // Get coat of arms
    const coatOfArms = chosenCountry.coatOfArms.png;

    // Set CoutnryData state
    setCountryData({
      commonName: commonName,
      officialName: officialName,
      currencyData: currencyData,
      languages: languages,
      capital: capital,
      population: population,
      flagUrl: flagUrl,
      flagAlt: flagAlt,
      coatOfArmsUrl: coatOfArms
    });  
  };
