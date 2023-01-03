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
        style={{ width: 400, height: 200 }}
        source={{ uri: `${props.Image}` }}
      />
      <Text style={styles.Title}>{props.Title}</Text>
      <Text>{props.Description}</Text>
      <Text>Author: {props.Author}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    textWidth: "Bold",
    textAlign: "center",
  },
});
