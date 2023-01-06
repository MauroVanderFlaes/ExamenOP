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

const Cart = ({navigation, route}) => {

    return (
        <View style={styles.cart}>
            <Text style={styles.Title}>Winkelmandje</Text>
            <Text style={styles.text}>Scan deze QR-code om uw producten te betalen.</Text>
            <QRCode style={styles.code} value='https://maurovdf.be/home/index.php/meta/' size={200} color='#0080FB'/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 5,
      },

      text: {
        fontSize: 18,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
      },

    cart: {
        marginTop: 40,
        alignItems: "center",
    },

});


export default Cart;