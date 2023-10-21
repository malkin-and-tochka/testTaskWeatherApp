import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStoreDataRelevance = async time => {
    await AsyncStorage.setItem('dataRelevanceStorage', JSON.stringify(time))
}

export const getStoreDataRelevance = async () => {
    return await AsyncStorage.getItem('dataRelevanceStorage')
}
