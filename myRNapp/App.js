
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import KarisikOrnekScreen from "./src/screens/KarisikOrnekScreen";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from "./src/redux";



const Stack=createNativeStackNavigator()
const App = () => {
const store =createStore(reducers)
  return (
    <Provider store={store}>
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>
      <Stack.Screen name="KarisikOrnek" component={KarisikOrnekScreen}/>
    </Stack.Navigator>

   </NavigationContainer>
   </Provider>
  );
};



export default App;
