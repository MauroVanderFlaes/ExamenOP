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

const Detail = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: `${props.Image}` }}
      />
      <Text style={styles.Title}>{props.Title}</Text>
      <Text style={styles.Description}>{props.Description}</Text>
      <Text style={styles.Author}>Author: {props.Author} van Meta</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    width: 420, 
    height: 350, 
    marginTop: 40,
  },
  Title: {
    marginTop: 20,
    fontSize: 28,
    textWidth: "Bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#0080FB",
  },

  Description: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  Author: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    color: "#0080FB",
  }
});
