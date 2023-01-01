import { NavigationContainer, TabRouter } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import Detail from '../components/Detail';

const QuestDetail = ({navigation, route}) =>{

return (
<View>
    <Detail Image={route.params.itemImage} Title={route.params.itemTitle} Description={route.params.itemDescription} Author={route.params.itemAuthor}/>
</View>
)
}

export default QuestDetail;