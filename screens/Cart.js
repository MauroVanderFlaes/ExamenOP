// Importeren van react native + extra pakketen
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";

// aanmaken van een cart component
const Cart = ({ navigation, route }) => {
  return (
    <View style={styles.cart}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.title}>Winkelmandje</Text>
      <Text style={styles.text}>
        Scan deze QR-code om uw producten te betalen.
      </Text>

      {/* Het maken van een QR-code aan de hand van het extra geinstalleerde pakket */}
      <QRCode
        style={styles.code}
        value="https://maurovdf.be/home/index.php/meta/"
        size={200}
        color="#0080FB"
      />
      <Text style={styles.textUnder}>
        Ben je van plan om een Meta Quest te kopen? Bekijk dan ook zeker onze
        games.
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Games")}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#0080FB" : "#0668E1" },
          styles.button,
        ]}
      >
        <Text style={styles.buttontext}>Bekijk games</Text>
      </Pressable>
    </View>
  );
};

//Styling van dit scherm
const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 26,
    marginBottom: 20,
    alignSelf: "center",
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },

  text: {
    fontSize: 18,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },

  cart: {
    marginTop: 40,
    alignItems: "center",
  },

  textUnder: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 220,
    marginLeft: 20,
    marginRight: 20,
  },

  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100,
    fontSize: 16,
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0668E1",
    marginTop: 30,
    marginLeft: 0,
    marginRight: 0,
  },

  buttontext: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Cart;
