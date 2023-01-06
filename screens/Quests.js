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
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.Search}>
        <View>
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ fontSize: 15 }}
            placeholder="Search"
          />
        </View>
      </View>
      <SearchFilter
        data={Quests}
        input={input}
        setInput={setInput}
        navigation={navigation}
      />
    </View>
  );
};

export default Quests;

const styles = StyleSheet.create({
  Search: {
    padding: 10,
    flexDirection: "row",
    width: "75%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },

  logo: {
    width: 130,
    height: 26,
    marginTop: 20,
    alignSelf: "center",
  },
});
