import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

import Quests from "./screens/Quests.js";
import QuestDetail from "./screens/QuestDetail.js";
import Cart from "./screens/Cart.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meta products" component={Quests} />
        <Stack.Screen name="QuestDetail" component={QuestDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
