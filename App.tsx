/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import MainScreenContainer from "./src/components/screens/main/MainScreenContainer";
import SubScreenContainer from "./src/components/screens/subScreen/SubScreenContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/components/screens/welcomeScreen/WelcomeScreen";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={MainScreenContainer}/>
          <Stack.Screen name="SubMain" component={SubScreenContainer}/>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
