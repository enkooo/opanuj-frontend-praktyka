import { LocationWeather, WeatherDetail } from '../models/LocationWeather';
import moment from 'moment';

interface ApiResponse {
  city: string;
  country: string;
  weatherDetails: WeatherDetail[] | { Weather: WeatherDetail[] };
}

export function normalizeWeatherDetails(data: ApiResponse): LocationWeather {
  const weatherDetails = Array.isArray(data.weatherDetails)
    ? data.weatherDetails
    : data.weatherDetails.Weather;

  return {
    city: data.city,
    country: data.country,
    weatherDetails: weatherDetails.map(detail => ({
      date: formatDate(detail.date, data.country),
      type: detail.type,
      averageTemperature: (detail.averageTemperature || detail.average_temperature)!
    }))
  };
}

function formatDate(dateString: string, country: string): string {
  const format = country === 'US' ? 'MM-DD-YYYY' : 'DD-MM-YYYY';

  const parsedDate = moment(dateString, format);
  if (!parsedDate.isValid()) {
    throw new Error(`Invalid date format for country ${country}`);
  }

  return parsedDate.format('DD-MM-YYYY');
}