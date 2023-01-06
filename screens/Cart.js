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
      <Pressable onPress={() => navigation.navigate("Games")}>
        <Text style={styles.button}>Bekijk games</Text>
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
    backgroundColor: "#0080FB",
    color: "white",
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0080FB",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Cart;
