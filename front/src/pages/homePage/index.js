
import { Button, Text, TextInput, View, StyleSheet, Switch, Image, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import ProductComponent from '../../components/productComponent';



const home = () => {

    return (
        <View>
            <ProductComponent/>
        </View>
    )


}


export default home