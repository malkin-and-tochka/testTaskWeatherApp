import {combineReducers, createStore} from "redux";
import {CurrentLocationWeatherReducer} from "./CurrentLocationWeatherReducer";
import {SubLocationWeatherReducer} from "./SubLocationWeatherReducer";
import {CarouselReducer} from "./CarouselReducer";
import { LanguageReducer } from "./languageReducer";

const reducers = combineReducers({
    currentLocationWeather: CurrentLocationWeatherReducer,
    subLocationWeatherAndInfo: SubLocationWeatherReducer,
    carouselState: CarouselReducer,
    languageState: LanguageReducer
})

const store = createStore(reducers)

export default store
