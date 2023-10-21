import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { useEffect, useState } from "react";
import { getCurrentLocationWeather } from "../../../api/api";
import SearchBarContainer from "./searchBar/SearchBarContainer";
import NetInfo from "@react-native-community/netinfo";
import { getStoreWeather } from "../../../storage/weatherStorage";
import { useDispatch } from "react-redux";
import CarouselContainer from "./Carousel/CarouselContainer";
import { setStoreDataRelevance } from "../../../storage/dataRelevenceStorage";
import RelevanceOfData from "./RelevanceOfData";
import Geolocation from "@react-native-community/geolocation";

const MainScreen = ({
                      country,
                      weatherDescription,
                      icon,
                      weatherMain,
                      temp,
                      tempMin,
                      tempMax,
                      tempFeelsLike,
                      humidity,
                      windSpeed,
                      rain,
                      clouds,
                      sunrise,
                      sunset,
                      setCurrentLocationWeather,
  lan
                    }) => {
  const [isNetworkExist, setIsNetworkExist] = useState(true);
  const dispatch = useDispatch();

  const setGeolocation = () => {
    Geolocation.getCurrentPosition(
      async (pos) => {
        const response = await getCurrentLocationWeather(pos.coords.latitude, pos.coords.longitude, lan);
        setCurrentLocationWeather(response);
        await setStoreDataRelevance(Date.now());
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
        const fetchingOfStoreData = await getStoreWeather();
        setCurrentLocationWeather(fetchingOfStoreData);
        setIsNetworkExist(false);
      }
    });
    // }
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {isNetworkExist === true ? <SearchBarContainer /> : null}
      <View style={styles.top}>
        <Text style={styles.text}>{country}</Text>
      </View>
      {isNetworkExist === false ? <RelevanceOfData /> : null}
      <View style={styles.middle}>
        <Image style={{ width: 150, height: 150 }}
               source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
        <Text style={styles.degrees}>
          {temp}
        </Text>
        <Text style={styles.text}>
          {weatherDescription}{"\n"}{tempMin}/{tempMax}
        </Text>
      </View>
      <CarouselContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: "#0B2F38",
    color: "#fff",
  },
  top: {
    top: 80,
    marginBottom: 100,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  degrees: {
    fontSize: 50,
    color: "#fff",
  },
  text: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
  },
});

export default MainScreen;
