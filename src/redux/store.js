import {combineReducers, createStore} from "redux";
import {CurrentLocationWeatherReducer} from "./CurrentLocationWeatherReducer";
import {SubLocationWeatherReducer} from "./SubLocationWeatherReducer";
import {CarouselReducer} from "./CarouselReducer";

const reducers = combineReducers({
    currentLocationWeather: CurrentLocationWeatherReducer,
    subLocationWeatherAndInfo: SubLocationWeatherReducer,
    carouselState: CarouselReducer
})

const store = createStore(reducers)

export default store
