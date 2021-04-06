import {IMCountryConfigInterface} from '../interfaces/country-config.interface';
import {IMCountryEnum} from '../enums/country.enum';

// List of European countries by area: https://en.wikipedia.org/wiki/List_of_European_countries_by_area
// List of codes by area: https://en.wikipedia.org/wiki/List_of_postal_codes

export const IMCountryConfigurations: IMCountryConfigInterface[] = [
  {
    countryName: 'Albania',
    country: IMCountryEnum.Albania,
    iso: 'AL',
    capital: 'Tirana',
    phoneNumber: {
      callingCode: 355,
      afterCodeNumbersLength: 9,
      example: 355123456789
    },
    postCodePattern: `^[0-9]{${4}}$`,
    postCodeExample: 1000
  },
  {
    countryName: 'Andorra',
    country: IMCountryEnum.Andorra,
    iso: 'AD',
    capital: 'Andorra la Vella',
    phoneNumber: {
      callingCode: 376,
      afterCodeNumbersLength: 9,
      example: 376123456789
    },
    postCodePattern: `^(?:AD)[0-9]{${3}}$`,
    postCodeExample: 'AD123'
  },
  {
    countryName: 'Germany',
    country: IMCountryEnum.Germany,
    iso: 'DE',
    capital: 'Berlin',
    phoneNumber: {
      callingCode: 49,
      afterCodeNumbersLength: 9,
      example: 49152901820
    },
    postCodePattern: `^[0-9]{${5}}$`,
    postCodeExample: 45678
  },
  {
    countryName: 'Ukraine',
    country: IMCountryEnum.Ukraine,
    iso: 'UA',
    capital: 'Kyiv',
    phoneNumber: {
      callingCode: 380,
      afterCodeNumbersLength: 9,
      example: 380971617271
    },
    postCodePattern: `^[0-9]{${5}}$`,
    postCodeExample: 81616
  },
  {
    countryName: 'Russia',
    country: IMCountryEnum.Russia,
    iso: 'RU',
    capital: 'Moskva',
    phoneNumber: {
      callingCode: 7,
      afterCodeNumbersLength: 10,
      example: 79585122113
    },
    postCodePattern: `^[0-9]{${6}}$`,
    postCodeExample: 123345
  },
  {
    countryName: 'France',
    country: IMCountryEnum.France,
    iso: 'FR',
    capital: 'Paris',
    phoneNumber: {
      callingCode: 33,
      afterCodeNumbersLength: 9,
      example: 33564576787
    },
    postCodePattern: `^[0-9]{${5}}$`,
    postCodeExample: 77300
  },
  {
    countryName: 'United States of America',
    country: IMCountryEnum.USA,
    iso: 'US',
    capital: 'Washington',
    phoneNumber: {
      callingCode: 1,
      afterCodeNumbersLength: 10,
      example: 17148408242
    },
    postCodePattern: `^[0-9]{${5}}$`,
    postCodeExample: 99999
  }
];
