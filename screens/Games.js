// Importeren van react native
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

//aanmaken van de Games object list
const Games = ({ navigation, route }) => {
  let Games = [
    {
      Naam: "Gorilla Tag",
      Description: "Speel tikkertje als een gorilla.",
    },

    {
      Naam: "VRChat",
      Description: "Speel samen met je vrienden minigames.",
    },

    {
      Naam: "Resident Evil 4",
      Description: "Beleef het verhaal en vermoord zombies.",
    },
  ];

  //Aanmaken van de useState voor de Naam
  const [enteredGame, setEnteredGame] = useState("");
  const [gamesData, setGames] = useState(Games);
  const gameHandler = (enteredText) => {
    setEnteredGame(enteredText);
  };

// Aanmaken van de useState voor de description
  const [enteredDesc, setEnteredDesc] = useState("");
  const descHandler = (enteredText) => {
    setEnteredDesc(enteredText);
  };

// Aanmaken van de Handler
  const addGameHandler = () => {
    let newGame = { Naam: enteredGame, Description: enteredDesc };
    let gameList = { Naam: newGame.Naam, Description: newGame.Description };
    setGames((Games) => [...Games, gameList]);
  };

  //Wat moet weergegeven worden op het scherm
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.title}>Meta Games</Text>
      <View style={styles.form}>
        <Text style={styles.gametitle}>Voeg ook jou favoriete game toe!</Text>

         {/* Text input die de input bijhoud in de gameHandler*/}
        <TextInput
          style={styles.field}
          placeholder="Game naam"
          onChangeText={gameHandler}
        ></TextInput>

         {/* Text input die de input bijhoud in de descHandler */}
        <TextInput
          style={styles.field}
          placeholder="Game beschrijving"
          onChangeText={descHandler}
        ></TextInput>
         {/* De knop die een Game object aanmaakt als je er op klikt */}
        <Pressable title="add" onPress={addGameHandler}>
          <Text style={styles.button}>Voeg toe</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>Voorgestelde games</Text>

       {/* Flatlist die de game objecten toont */}
      <FlatList
        style={styles.gameslist}
        data={gamesData}
        ListFooterComponent={<View style={{ height: 250 }}></View>}
        renderItem={({ item }) => (
          <View style={styles.game}>
            <Text style={styles.gametitle}>{item.Naam}</Text>
            <Text style={styles.text}>Beschrijving: {item.Description}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Styling van de items in dit scherm
const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 26,
    marginTop: 20,
    alignSelf: "center",
  },

  form: {
    margin: 20,
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "#0080FB",
    backgroundColor: "#0080FB",
  },

  field: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  gameslist: {
    marginTop: 10,
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
  },

  button: {
    backgroundColor: "white",
    color: "#0080FB",
    padding: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 20,
  },

  game: {
    margin: 20,
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "white",
  },

  gametitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },

  text: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
});

export default Games;
