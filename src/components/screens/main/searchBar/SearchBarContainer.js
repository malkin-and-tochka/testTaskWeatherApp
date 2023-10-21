import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import {setSubLocationInfo} from "../../../../redux/SubLocationWeatherReducer";

const mapStateToProps = state => {
    return {}
}

const SearchBarContainer = connect(mapStateToProps,{
    setSubLocationInfo
})(SearchBar)

export default SearchBarContainer
