import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CarouselElement from "./CarouselElement";
import { getDiapasonLocationWeather } from "../../../../api/api";
import NetInfo from "@react-native-community/netinfo";
import { getStoreCarousel } from "../../../../storage/carouselStorage";
import { useDispatch } from "react-redux";
import Geolocation from "@react-native-community/geolocation";

const Carousel = ({ carouselArr, setCarouselState, lan, measure }) => {
  const dispatch = useDispatch();
  const setGeolocation = () => {
    Geolocation.getCurrentPosition(
      async (pos) => {
        const hourWeatherResponse = await getDiapasonLocationWeather(pos.coords.latitude, pos.coords.longitude, lan);
        setCarouselState(hourWeatherResponse);
      },
      (error) => console.log("GetCurrentPosition Error", JSON.stringify(error)),
      { enableHighAccuracy: true },
    );
  };

  useEffect(() => {
    //check connection
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        async function fetchData() {
          setGeolocation();
        }

        fetchData();
      } else {
        const fetchingOfStoreData = await getStoreCarousel();
        dispatch(setCarouselState(fetchingOfStoreData));
      }
    });
  }, []);

  const arrToCarousel = carouselArr.map(el => {
    const date = new Date(el.dt * 1000);
    const currentHour = date.getHours();
    return <CarouselElement lan={lan} measure={measure} key={el.dt} icon={el.weather[0].icon} hour={`${currentHour}:00`} temp={el.main.temp}
                            weatherDescription={el.weather[0].description} />;
  });

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 5 }}
                style={{ marginTop: 20 }}>
      {arrToCarousel}
    </ScrollView>
  );
};

export default Carousel;
