//importeren van de react native
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

// Importeren van de Detail component
import Detail from "../components/Detail";

// Wat de screen QuestDetail moet weergeven
const QuestDetail = ({ navigation, route }) => {
  return (
    <View>
      {/* Een Detail component met de items die doorgegeven worden via de API */}
      <Detail
        Image={route.params.itemImage}
        Title={route.params.itemTitle}
        Description={route.params.itemDescription}
        Author={route.params.itemAuthor}
      />
      <Pressable
        onPress={() => navigation.navigate("Cart")}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#0080FB" : "#0668E1" },
          styles.button,
        ]}
      >
        <Text style={styles.buttontext}>Nu kopen</Text>
      </Pressable>
    </View>
  );
};

// Exporteren van de QuestDetail, als je dit niet doet kan dit scherm niet weergegeven worden
export default QuestDetail;

// Styling van dit scherm
const styles = StyleSheet.create({
  button: {
    padding: 15,
    fontSize: 16,
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0668E1",
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },

  buttontext: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
