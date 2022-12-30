import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const Quests = ({navigation}) =>{

    const [Quests, setQuests] = useState ([]);

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
                <Pressable onPress={() => navigation.navigate("QuestDetail", {itemTitle: item.title.rendered, itemDescription: item.yoast_head_json.og_description})}>
                  <Text>bekijk product:</Text>
                  </Pressable>
              </View>

    )}/>
        </View>
    )
}

export default Quests;