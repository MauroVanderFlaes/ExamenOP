//react native + extra pakketen importeren
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

//screens importeren
import Quests from "./screens/Quests.js";
import QuestDetail from "./screens/QuestDetail.js";
import Cart from "./screens/Cart.js";
import Games from "./screens/Games.js";

//Een navigator aanmaken
const Stack = createNativeStackNavigator();

//screens toevoegen in de app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meta products" component={Quests} /> 
        <Stack.Screen name="QuestDetail" component={QuestDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Games" component={Games} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
