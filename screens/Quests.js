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
import SearchFilter from "../components/SearchFilter";

const Quests = ({ navigation }) => {
  const [Quests, setQuests] = useState([]);

  const getQuests = async () => {
    try {
      const response = await fetch(
        "https://maurovdf.be/wp-json/wp/v2/posts?categories=4",
        {}
      );
      const json = await response.json();
      setQuests(json);
      console.log(Quests);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuests();
  }, []);

  const [input, setInput] = useState("");

  return (
    <View>
      <View>

        <View
          style={{
            padding: 10,
            flexDirection: "row",
            width: "95%",
            backgroundColor: "#d9dbda",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ fontSize: 15 }}
            placeholder="Search"
          />
        </View>
      </View>
      <SearchFilter data={Quests} input={input} setInput={setInput} navigation={navigation}/>
    </View>
  );
};

export default Quests;

const styles = StyleSheet.create({

});
