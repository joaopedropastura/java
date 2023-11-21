import { Button, Text, TextInput, View, StyleSheet, Switch, Image, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import ProductComponent from '../../components/productComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RulerLenghtComponent from '../../components/rulerLenghtComponent';

const productPage = () => {


    return ( 
        <View>
            <View style={styles.mainFrame}>
            <View style={{gap: 12}}>
                <Image
                    source={require('../../../assets/arts/ABAPORU_375x_crop_center.webp')}
                    style={{height:420, width: 'fitContent', borderRadius: 10}}
                    />
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Moisés Odorissio</Text>
                    <Text>Quadro Abaporu</Text>
                    <FavoriteBorderIcon style={styles.iconColor}/>
                </View>
            </View>
            <RulerLenghtComponent/>
            <View style={{height: '6vh'}}>
                <Text style={{fontSize: 16}}>R$299,00</Text>
                <Text style={{fontSize: 10}}>10x de 29,9</Text>
            </View>
        </View>
        </View>
    )

}


const styles = StyleSheet.create({
    mainFrame: {
        height: 750,
        width: '90vw',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#6F6F6F61',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-between'
    },
    iconColor: {
        color: '6c6c6c'
    }
})



export default productPage