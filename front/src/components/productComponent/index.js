import { Button, Text, TextInput, View, StyleSheet, Switch, Image, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import rulerLenghtComponent from '../rulerLenghtComponent';

const ProductComponent = ({ data }) => {
    console.log(data.image)
    return (
        
        <Pressable 
            style={styles.mainFrame}
        >
            <View style={{gap: 12, alignItems: 'center'}}>
                <Image
                    source={{uri : data.image}}
                    style={{height:200, width: '23vh', borderRadius: 10}}
                    />
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>{data.title}</Text>
                    <FavoriteBorderIcon style={styles.iconColor}/>
                </View>
            </View>

            <View style={{height: '6vh'}}>
                <Text style={{fontSize: 16}}>R${data.price}</Text>
                <Text style={{fontSize: 10}}>10x {data.price/10}</Text>
            </View>
        </Pressable>

    )
}


const styles = StyleSheet.create({
    mainFrame: {
        height: 350,
        width: '43vw',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        borderColor: '#6F6F6F61',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between'
    },
    iconColor: {
        color: '6c6c6c'
    }
})


export default ProductComponent