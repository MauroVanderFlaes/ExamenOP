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

const Games = ({navigation, route}) => {

    return (
        <View>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
    );
    
}


const styles = StyleSheet.create({
    logo: {
      width: 130,
      height: 26,
      marginTop: 20,
      alignSelf: "center",
    },

});

export default Games;