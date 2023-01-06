//react native importeren
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
  Button,
} from "react-native";

//Zoekbalk aanmaken + functie counter
const SearchFilter = ({ data, input, setInput, navigation }) => {
  const [counter, setCounter] = useState(0);

  {/* increase functie die aangeroepen zal worden per klik */}
  const increase = () => {
     {/* De counter met 1 verhogen */}
    setCounter((currentCounter) => currentCounter + 1);
  };

//wat wordt weergegeven op de screen
  return (
    <View style={styles.upper}>

      {/* Maken van het winkelmandje icon */}
      <Pressable onPress={() => navigation.navigate("Cart")}>
        <Image
          style={styles.cart}
          source={require("../assets/shopping-cart.png")}
        />
      </Pressable>

       {/* Counter weergeven */}
      <Text style={styles.counter}>{counter}</Text>

       {/* De list met items die weergegeven moeten worden in Quests */}
      <FlatList
        data={data}
        ListFooterComponent={<View style={{ height: 250 }}></View>}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={styles.article}>
                {item.yoast_head_json?.og_image !== undefined && (
                  <Image
                    style={styles.image}
                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                  />
                )}
                <Text style={styles.title}>
                  <Text>{item.title.rendered}</Text>
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate("QuestDetail", {
                      itemImage: item.yoast_head_json.og_image[0].url,
                      itemTitle: item.title.rendered,
                      itemDescription: item.yoast_head_json.og_description,
                      itemAuthor: item.yoast_head_json.author,
                    })
                  }
                >
                  <Text style={styles.more}>Lees Meer</Text>
                  <Text style={styles.button} onPress={increase}>
                    Voeg toe aan mandje
                  </Text>
                </Pressable>
              </View>
            );
          }

           /* Het maken van de zoekfilter. Deze werkt zowel met hoofdletters als kleine letters. */
          if (item.title.rendered.toLowerCase().includes(input.toLowerCase())) {
            return (

               /* De items die enkel getoond worden als je zoekt (image, titel en lees meer knop) */
              <View style={styles.article}>
                {item.yoast_head_json?.og_image !== undefined && (
                  <Image
                    style={styles.image}
                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                  />
                )}
                <Text style={styles.title}>
                  <Text>{item.title.rendered}</Text>
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate("QuestDetail", {
                      itemImage: item.yoast_head_json.og_image[0].url,
                      itemTitle: item.title.rendered,
                      itemDescription: item.yoast_head_json.og_description,
                      itemAuthor: item.yoast_head_json.author,
                    })
                  }
                >
                  <Text style={styles.more}>Lees Meer</Text>
                </Pressable>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

/* De component exporteren naar je app, als je dit niet toont wordt er niks weergegeven */
export default SearchFilter;

 /* styling van de items binnen deze component*/
const styles = StyleSheet.create({
  cart: {
    width: 40,
    height: 40,
    marginLeft: 340,
    marginTop: -60,
  },

  counter: {
    marginTop: -20,
    marginLeft: 360,
    marginBottom: 10,
  },

  upper: {
    marginTop: 10,
  },

  article: {
    margin: 20,
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "white",
  },

  image: {
    width: 350,
    height: 200,
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },

  more: {
    fontSize: 18,
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 20,
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
  },
});
