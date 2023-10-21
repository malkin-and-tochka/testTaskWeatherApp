import {Text, View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {getStoreDataRelevance} from "../../../storage/dataRelevenceStorage";

const getDiapason = time => {
    const dateNow = Date.now()
    const diff = dateNow - time
    const millisecondsInMinute = 1000 * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;

    if (diff < millisecondsInMinute) {
        return '< 1 minute';
    } else if (diff < millisecondsInHour) {
        return '> 1 minute';
    } else if (diff < millisecondsInDay) {
        return '> 1 hour';
    } else {
        return '> 1 day';
    }
}

const RelevanceOfData = () => {
    const [time, setTime] = useState('')
    useEffect(()=> {
        async function fetchData() {
            const res = await getStoreDataRelevance()
            setTime(getDiapason(res))
        }
        fetchData()
    })
    return (
        <View style={styles.timeWrapper}>
            <Text style={styles.time}>Relevance: {time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timeWrapper: {

    },
    time: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
})

export default RelevanceOfData;
