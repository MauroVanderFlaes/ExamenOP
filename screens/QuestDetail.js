import { NavigationContainer, TabRouter } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import Detail from '../components/Detail';

const QuestDetail = ({navigation, route}) =>{

return (
<View>
    <Detail Title={route.params.itemTitle} Description={route.params.itemDescription} />
</View>
)
}

export default QuestDetail;