import { Button, Text, TextInput, View, StyleSheet, Switch, Image, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import ProductComponent from '../../components/productComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RulerLenghtComponent from '../../components/rulerLenghtComponent';



const productPage = () => {

    const [optionSize, setOptionSize] = useState('21x29')

    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.mainFrame}>
                <View style={{ gap: 12 }}>
                    <Image
                        source={require('../../../assets/arts/ABAPORU_375x_crop_center.webp')}
                        style={{ height: 420, width: 'fitContent', borderRadius: 10 }}
                    />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text>Moisés Odorissio</Text>
                            <Text style={{ fontSize: 18 }}>Quadro Abaporu</Text>
                        </View>
                        <FavoriteBorderIcon style={styles.iconColor} />
                    </View>
                </View>
                <View style={{height: 80, justifyContent: 'center'}}>
                    <Text style={{ fontSize: 16 }}>R$299,00</Text>
                    <Text style={{ fontSize: 10 }}>10x de 29,9</Text>
                </View>
                <RulerLenghtComponent />
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