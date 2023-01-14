// react native imorteren
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

// De component Searchfilter importeren
import SearchFilter from "../components/SearchFilter";

// Aanmaken van een use State voor de quests (de articles)
const Quests = ({ navigation }) => {
  const [Quests, setQuests] = useState([]);

  // De info van je berichten ophalen om deze te kunnen gebruiken
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

  // Wat weergegeven wordt op het Quests scherm
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.search}>
        <View>
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ fontSize: 15 }}
            placeholder="Search"
          />
        </View>
      </View>

      {/* De Search filter component weergeven met de data */}
      <SearchFilter
        data={Quests}
        input={input}
        setInput={setInput}
        navigation={navigation}
      />
    </View>
  );
};

// Exporteren van het scherm, als je dit niet doet wordt er niets weergegeven in de app
export default Quests;

// Styling van de items in dit screen
const styles = StyleSheet.create({
  search: {
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
