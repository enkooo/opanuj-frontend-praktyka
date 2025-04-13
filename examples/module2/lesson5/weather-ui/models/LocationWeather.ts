export enum WeatherType {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

export interface DailyWeather {
  date: string;
  type: WeatherType;
  averageTemperature: number;
}

export interface LocationWeather {
  city: string;
  country: string;
  weatherDetails: DailyWeather[];
}

export interface WeatherDetail {
  date: string;
  type: WeatherType;
  averageTemperature?: number;
  average_temperature?: number;
}
