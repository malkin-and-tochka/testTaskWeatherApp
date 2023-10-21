import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStoreLanguage = async language => {
  await AsyncStorage.setItem("languageState", language);
};

export const getStoreLanguage = async () => {
  return await AsyncStorage.getItem("languageState");
};
