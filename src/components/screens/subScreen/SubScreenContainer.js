import {setSubLocationWeather, setSubLocationInfo} from "../../../redux/SubLocationWeatherReducer";
import {connect} from "react-redux";
import SubScreen from "./SubScreen";


const mapStateToProps =  state => {
    let temperature = `${Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.temp) - 273}${state.languageState.measure}`;
    let temperatureMin = `${Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.temp_min) - 273}${state.languageState.measure}`;
    let temperatureMax = `${Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.temp_max) - 273}${state.languageState.measure}`;
    if (state.languageState.lang === "en") {
        temperature = `${Math.round((state.subLocationWeatherAndInfo.subLocationWeather.main.temp - 273.15) * 1.8) + 32}${state.languageState.measure}`;
        temperatureMin = `${Math.round((state.subLocationWeatherAndInfo.subLocationWeather.main.temp_min - 273.15) * 1.8) + 32}${state.languageState.measure}`;
        temperatureMax = `${Math.round((state.subLocationWeatherAndInfo.subLocationWeather.main.temp_max - 273.15) * 1.8) + 32}${state.languageState.measure}`;
    }
    return {
        countryCoordinateLon: state.subLocationWeatherAndInfo.locationInfo.lon,
        countryCoordinateLat: state.subLocationWeatherAndInfo.locationInfo.lat,
        icon: state.subLocationWeatherAndInfo.subLocationWeather.weather[0].icon,
        country: state.subLocationWeatherAndInfo.locationInfo.name,
        weatherDescription: state.subLocationWeatherAndInfo.subLocationWeather.weather[0].description.toUpperCase(),
        weatherMain: state.subLocationWeatherAndInfo.subLocationWeather.weather[0].main,
        temp: temperature,
        tempFeelsLike: Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.feels_like) - 273,
        tempMin: temperatureMin,
        tempMax: temperatureMax,
        humidity: state.subLocationWeatherAndInfo.subLocationWeather.main.humidity,
        windSpeed: state.subLocationWeatherAndInfo.subLocationWeather.wind.speed,
        rain: state.subLocationWeatherAndInfo.subLocationWeather.rain,
        clouds: state.subLocationWeatherAndInfo.subLocationWeather.clouds.all,
        sunrise: state.subLocationWeatherAndInfo.subLocationWeather.sys.sunrise,
        sunset: state.subLocationWeatherAndInfo.subLocationWeather.sys.sunset,
        lan: state.languageState.lang
    }
}

const SubScreenContainer = connect(mapStateToProps, {
    setSubLocationInfo,
    setSubLocationWeather
})(SubScreen)

export default SubScreenContainer
