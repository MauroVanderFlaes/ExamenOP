import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const Quests = ({navigation}) =>{

    const [Quests, setQuests] = useState ([]);
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter((currentCounter) => currentCounter + 1);
      };

    const getQuests = async () => {
        try {
            const response = await fetch ("https://maurovdf.be/wp-json/wp/v2/posts?categories=4", {

            })
            const json = await response.json();
            setQuests(json);
            console.log(Quests);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getQuests();
    }, []);


    return (
        <View>
            <View >
                <Image style={styles.cart} source={require("../assets/shopping-cart.png")}/>
                <Text style={styles.counter}>{counter}</Text>
            </View>
            <FlatList data={Quests} renderItem={({item}) => (
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
                <Pressable onPress={() => navigation.navigate("QuestDetail", {itemImage: item.yoast_head_json.og_image[0].url,itemTitle: item.title.rendered, itemDescription: item.yoast_head_json.og_description, itemAuthor: item.yoast_head_json.author})}>
                  <Text>Lees Meer</Text>
                  </Pressable>
              </View>

    )}/>
        </View>
    )
}

export default Quests;

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