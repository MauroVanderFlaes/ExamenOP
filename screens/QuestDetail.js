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
import Detail from "../components/Detail";

const QuestDetail = ({ navigation, route }) => {
  return (
    <View>
      <Detail
        Image={route.params.itemImage}
        Title={route.params.itemTitle}
        Description={route.params.itemDescription}
        Author={route.params.itemAuthor}
      />
      <Pressable onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.button}>Nu kopen</Text>
      </Pressable>
    </View>
  );
};

export default QuestDetail;

const styles = StyleSheet.create({
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
