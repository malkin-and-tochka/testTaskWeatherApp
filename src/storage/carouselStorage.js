import AsyncStorage from "@react-native-async-storage/async-storage";

// надо, чтобы я сохранял данные после каждой записи в store (но, как я понял, надо сделать только основной экран при отсутстви подключения)
// вижу 2 способа: 1) запись в store после каждого успешного запроса на сервер
// 2) вдруг есть ошибка в догики записи, тогда стоит записывать, когда я точно знаю, существует ли то, что я записываю
export const setStoreCarousel = async weather => {
    await AsyncStorage.setItem('carouselState', JSON.stringify(weather))
}

export const getStoreCarousel = async () => {
    const storeWeather = await AsyncStorage.getItem('carouselState')
    return JSON.parse(storeWeather)
}
