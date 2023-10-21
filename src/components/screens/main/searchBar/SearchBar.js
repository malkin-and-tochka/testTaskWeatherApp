import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import SearchLocationRow from "./SearchLocationRow";

const SearchBar = ({setSubLocationInfo}) => {
    const [isHidden, setIsHidden] = useState(true)
    const [locations, setLocations] = useState(['London', 'Canada', 'Poland', 'Georgia', 'Russia'])

    const locationsSearch = locations.map((location, index) => {
        return (index !== locations.length - 1) ?
            <SearchLocationRow setSubLocationInfo={setSubLocationInfo} key={location} location={location}/>
            :
            <SearchLocationRow setSubLocationInfo={setSubLocationInfo} key={location} location={location} style={{borderBottomWidth: 0}}/>

    })
    return (
        <View>
            <TouchableOpacity style={styles.searchBar} onPress={() => setIsHidden(prevState => !prevState)}>
                <Text style={styles.text}>Search city...</Text>
            </TouchableOpacity>
            {isHidden ? null :
                <View style={styles.locationsWrapper}>
                    {locationsSearch}
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '80%',
        height: 40,
        borderRadius: 20,
        position: "absolute",
        alignSelf: 'center',
        justifyContent: "center",
        paddingLeft: 20,
        top: 10
    },
    text: {
        color: '#fff',
        fontSize: 15
    },
    locationsWrapper: {
        backgroundColor: '#85979C',
        borderRadius: 30,
        width: '80%',
        position: "absolute",
        top: 60,
        alignSelf: 'center',
        zIndex: 1
    }
})

export default SearchBar;
