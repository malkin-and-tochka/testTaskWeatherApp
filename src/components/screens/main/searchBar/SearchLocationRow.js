import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {getLocationByName} from "../../../../api/api";
import {useNavigation} from "@react-navigation/native";


const SearchLocationRow = ({style, location, setSubLocationInfo}) => {
    const navigation = useNavigation()
    const getTriggerLocationWeather = async () => {
        const res = await getLocationByName(location)
        setSubLocationInfo(res)
        navigation.navigate('SubMain')
    }

    return (
        <TouchableOpacity onPress={getTriggerLocationWeather} style={[styles.locationRow, style]} key={location}><Text
            style={{fontSize: 20, textAlign: 'center'}}>{location}</Text></TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    locationRow: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1
    }
})

export default SearchLocationRow;
