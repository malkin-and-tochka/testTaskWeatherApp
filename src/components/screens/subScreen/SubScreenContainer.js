import {setSubLocationWeather, setSubLocationInfo} from "../../../redux/SubLocationWeatherReducer";
import {connect} from "react-redux";
import SubScreen from "./SubScreen";


const mapStateToProps = state => {
    return {
        countryCoordinateLon: state.subLocationWeatherAndInfo.locationInfo.lon,
        countryCoordinateLat: state.subLocationWeatherAndInfo.locationInfo.lat,
        icon: state.subLocationWeatherAndInfo.subLocationWeather.weather[0].icon,
        country: state.subLocationWeatherAndInfo.locationInfo.name,
        weatherDescription: state.subLocationWeatherAndInfo.subLocationWeather.weather[0].description.toUpperCase(),
        weatherMain: state.subLocationWeatherAndInfo.subLocationWeather.weather[0].main,
        temp: Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.temp) - 273,
        tempFeelsLike: Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.feels_like) - 273,
        tempMin: Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.temp_min) - 273,
        tempMax: Math.round(state.subLocationWeatherAndInfo.subLocationWeather.main.temp_max) - 273,
        humidity: state.subLocationWeatherAndInfo.subLocationWeather.main.humidity,
        windSpeed: state.subLocationWeatherAndInfo.subLocationWeather.wind.speed,
        rain: state.subLocationWeatherAndInfo.subLocationWeather.rain,
        clouds: state.subLocationWeatherAndInfo.subLocationWeather.clouds.all,
        sunrise: state.subLocationWeatherAndInfo.subLocationWeather.sys.sunrise,
        sunset: state.subLocationWeatherAndInfo.subLocationWeather.sys.sunset
    }
}

const SubScreenContainer = connect(mapStateToProps, {
    setSubLocationInfo,
    setSubLocationWeather
})(SubScreen)

export default SubScreenContainer
