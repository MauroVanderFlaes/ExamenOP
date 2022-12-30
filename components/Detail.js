import { NavigationContainer, TabRouter } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const Detail = (props) =>{

return (
<View>
<Text>
    {props.Title}
</Text>
<Text>
    {props.Description}
</Text>
</View>
)
}

export default Detail;