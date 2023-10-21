import { Pressable, StyleSheet, Text, View } from "react-native";
import { setStoreLanguage } from "../../../storage/localizationStorage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../../redux/languageReducer";

const WelcomeScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const onPressEn = async () => {
    navigation.navigate("Main");
  };
  const onPressRu = async () => {
    navigation.navigate("Main");
    dispatch(changeLanguage())
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please, choose the languages:
      </Text>
      <Pressable style={styles.button} onPress={onPressEn}>
        <Text style={styles.text}>English</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPressRu}>
        <Text style={styles.text}>Russian</Text>
      </Pressable>
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
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default WelcomeScreen;
