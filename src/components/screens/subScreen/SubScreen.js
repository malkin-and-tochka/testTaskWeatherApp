import {useEffect, useState} from 'react';
import {getCurrentLocationWeather} from "../../../api/api";
import {Button, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const SubScreen = ({
                       countryCoordinateLon,
                       countryCoordinateLat,
                       icon,
                       country,
                       weatherDescription,
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
                       setSubLocationInfo,
                       setSubLocationWeather,
  lan
                   }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const navigation = useNavigation()
    useEffect(() => {
        async function fetchData() {
            const response = await getCurrentLocationWeather(countryCoordinateLat, countryCoordinateLon, lan)
            setSubLocationWeather(response)
            setIsLoaded(true)
        }

        fetchData()
    }, [])
    const goBackOnPress = () => navigation.navigate('Main')
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            {isLoaded ?
                <>
                    <TouchableOpacity style={styles.button} onPress={goBackOnPress}>
                        <Text style={styles.text}>{'<'}</Text>
                    </TouchableOpacity>
                    <View style={styles.top}>
                        <Text style={styles.text}>{country}</Text>
                    </View>
                    <View style={styles.middle}>
                        <Image style={{width: 150, height: 150}} source={{uri:`https://openweathermap.org/img/wn/${icon}@2x.png`}}/>
                        <Text style={styles.degrees}>
                            {temp}
                        </Text>
                        <Text style={styles.text}>
                            {weatherDescription}{'\n'}{tempMin}/{tempMax}
                        </Text>
                    </View>
                </>
                :
                null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#0B2F38',
        color: '#fff'
    },
    top: {
        top: 80,
        marginBottom: 100,
        width: '100%',
        justifyContent: "center",
        textAlign: "center"
    },
    middle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        gap: 20
    },
    degrees: {
        fontSize: 50,
        color: '#fff'
    },
    text: {
        fontSize: 25,
        fontWeight: '400',
        textAlign: "center",
        color: '#fff'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        top: 10,
        left: 10
    }
})
export default SubScreen;
