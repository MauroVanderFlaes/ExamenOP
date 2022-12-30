import { NavigationContainer, TabRouter } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const QuestDetail = ({navigation, route}) =>{

return (
<View>
<Text>
    {route.params.itemTitle}
</Text>
</View>
)
}

export default QuestDetail;