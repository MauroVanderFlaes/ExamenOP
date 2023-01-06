// Importeren van react native
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";

//het aanmaken van de component Detail en wat deze moet weergeven
const Detail = (props, { navigation }) => {
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Image style={styles.image} source={{ uri: `${props.Image}` }} />
      <Text style={styles.title}>{props.Title}</Text>
      <Text style={styles.description}>
        Productbeschrijving: {props.Description}
      </Text>
      <Text style={styles.author}>Auteur: {props.Author} van Meta</Text>
    </View>
  );
};
// exporteren van de Detail component. Als je dit niet doet, wordt deze niet weergegeven
export default Detail;

// Styling van de items binnen dit component
const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 26,
    marginTop: 20,
    alignSelf: "center",
  },

  image: {
    width: 420,
    height: 250,
    marginTop: 40,
  },
  title: {
    marginTop: 20,
    fontSize: 28,
    textWidth: "Bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#0080FB",
  },

  description: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  author: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    color: "#0080FB",
  },

  button: {
    backgroundColor: "#0080FB",
    color: "white",
    padding: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#0080FB",
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },
});
