import {connect} from "react-redux";
import MainScreen from "./MainScreen";
import {setCurrentLocationWeather} from "../../../redux/CurrentLocationWeatherReducer";

const mapStateToProps = state => {
    return {
        country: state.currentLocationWeather.name,
        weatherDescription: state.currentLocationWeather.weather[0].description.toUpperCase(),
        icon: state.currentLocationWeather.weather[0].icon,
        weatherMain: state.currentLocationWeather.weather[0].main,
        temp: Math.round(state.currentLocationWeather.main.temp) - 273,
        tempFeelsLike: Math.round(state.currentLocationWeather.main.feels_like) - 273,
        tempMin: Math.round(state.currentLocationWeather.main.temp_min) - 273,
        tempMax: Math.round(state.currentLocationWeather.main.temp_max) - 273,
        humidity: state.currentLocationWeather.main.humidity,
        windSpeed: state.currentLocationWeather.wind.speed,
        rain: state.currentLocationWeather.rain,
        clouds: state.currentLocationWeather.clouds.all,
        sunrise: state.currentLocationWeather.sys.sunrise,
        sunset: state.currentLocationWeather.sys.sunset
    }
}

const MainScreenContainer = connect(mapStateToProps, {
    setCurrentLocationWeather
})(MainScreen)

export default MainScreenContainer
