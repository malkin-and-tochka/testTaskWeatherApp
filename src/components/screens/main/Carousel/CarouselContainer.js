import {connect} from "react-redux";
import Carousel from "./Carousel";
import {setCarouselState} from "../../../../redux/CarouselReducer";


const mapStateToProps = state => {
    return {
        carouselArr: state.carouselState
    }
}

const CarouselContainer = connect(mapStateToProps, {
    setCarouselState
})(Carousel)

export default CarouselContainer
