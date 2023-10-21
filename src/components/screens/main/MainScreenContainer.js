import { connect } from "react-redux";
import MainScreen from "./MainScreen";
import { setCurrentLocationWeather } from "../../../redux/CurrentLocationWeatherReducer";

const mapStateToProps = state => {
  let temperature = `${Math.round(state.currentLocationWeather.main.temp) - 273}${state.languageState.measure}`;
  let temperatureMin = `${Math.round(state.currentLocationWeather.main.temp_min) - 273}${state.languageState.measure}`;
  let temperatureMax = `${Math.round(state.currentLocationWeather.main.temp_max) - 273}${state.languageState.measure}`;
  if (state.languageState.lang === "en") {
    temperature = `${Math.round((state.currentLocationWeather.main.temp - 273.15) * 1.8) + 32}${state.languageState.measure}`;
    temperatureMin = `${Math.round((state.currentLocationWeather.main.temp_min - 273.15) * 1.8) + 32}${state.languageState.measure}`;
    temperatureMax = `${Math.round((state.currentLocationWeather.main.temp_max - 273.15) * 1.8) + 32}${state.languageState.measure}`;
  }
  return {
    country: state.currentLocationWeather.name,
    weatherDescription: state.currentLocationWeather.weather[0].description.toUpperCase(),
    icon: state.currentLocationWeather.weather[0].icon,
    weatherMain: state.currentLocationWeather.weather[0].main,
    tempFeelsLike: Math.round(state.currentLocationWeather.main.feels_like) - 273,
    temp: temperature,
    tempMin: temperatureMin,
    tempMax: temperatureMax,
    humidity: state.currentLocationWeather.main.humidity,
    windSpeed: state.currentLocationWeather.wind.speed,
    rain: state.currentLocationWeather.rain,
    clouds: state.currentLocationWeather.clouds.all,
    sunrise: state.currentLocationWeather.sys.sunrise,
    sunset: state.currentLocationWeather.sys.sunset,
    lan: state.languageState.lang
  };
};

const MainScreenContainer = connect(mapStateToProps, {
  setCurrentLocationWeather,
})(MainScreen);

export default MainScreenContainer;
