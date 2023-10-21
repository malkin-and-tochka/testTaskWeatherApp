import {View, StyleSheet, Text, Image} from "react-native";

const CarouselElement = ({hour, weatherDescription, temp, icon}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>
                {hour}
            </Text>
            <Image style={{width: 50, height: 50}} source={{uri:`https://openweathermap.org/img/wn/${icon}@2x.png`}}/>
            <Text style={styles.degrees}>
                {Math.round(temp) - 273}°С
            </Text>
            <Text style={styles.text}>
                {weatherDescription}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 100,
        maxHeight: 150,
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        color: '#fff'
    },
    text: {
        textAlign: "center",
        width: '80%',
        color: '#fff'
    },
    degrees: {
        fontSize: 20,
        color: '#fff'
    }
})

export default CarouselElement;
