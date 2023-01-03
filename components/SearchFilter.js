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

const SearchFilter = ({ data, input, setInput, navigation }) => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter((currentCounter) => currentCounter + 1);
    }
  return (
    <View style={{ marginTop: 10 }}>
        <Image style={styles.cart} source={require("../assets/shopping-cart.png")}/>
        <Text style={styles.counter}>{counter}</Text>
      <FlatList
        data={data}
        ListFooterComponent={<View style={{height: 250}}></View>}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View>
                {item.yoast_head_json?.og_image !== undefined && (
                  <Image
                    style={{ width: 420, height: 200 }}
                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                  />
                )}
                <Text>
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
                  <Text>Lees Meer</Text>
                  <Button style="button" title="Add to cart" onPress={increase} />
                </Pressable>
              </View>
            );
          }

          if (item.title.rendered.toLowerCase().includes(input.toLowerCase())) {
            return(
                <View>
                {item.yoast_head_json?.og_image !== undefined && (
                  <Image
                    style={{ width: 420, height: 200 }}
                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                  />
                )}
                <Text>
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
                  <Text>Lees Meer</Text>
                </Pressable>
              </View>
            )
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
    cart: {
        width: 50,
        height: 50,
        marginLeft: 350,
      },
    
      counter: {
        marginLeft: 350,
      },
});
