import { Button, Text, TextInput, View, StyleSheet, Switch, Image, Pressable, ScrollView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RulerLenghtComponent from '../../components/rulerLenghtComponent';
import ArtistPage from '../artistPage';


const productPage = () => {

    const [optionSize, setOptionSize] = useState('21x29')
    // const []
    const navigation = useNavigation()

    
    const goToArtistPage = () => {
        navigation.navigate('ArtistPage')
    }

    useEffect(() => {
        console.log(optionSize)
    },[optionSize])

    return (
        <ScrollView style={{height: '80vh'}}>

            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <View style={styles.mainFrame}>
                    <View style={{ gap: 12 }}>
                        <Image
                            source={require('../../../assets/arts/ABAPORU_375x_crop_center.webp')}
                            style={{ height: 420, width: 'fitContent', borderRadius: 10 }}
                        />
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{padding: 10}}>
                                <Pressable onPress={() => goToArtistPage()}>
                                    <Text>Moisés Odorissio</Text>
                                </Pressable>
                                <Text style={{ fontSize: 18 }}>Quadro Abaporu</Text>
                            </View>
                            <FavoriteBorderIcon style={styles.iconColor} />
                        </View>
                    </View>
                    <View style={{ height: 80, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16 }}>R$299,00</Text>
                        <Text style={{ fontSize: 10 }}>10x de 29,9</Text>
                    </View>
                    <RulerLenghtComponent set = {setOptionSize} />
                </View>

                <Pressable 
                    onPress={() => goToCheckOut()}
                    style={styles.checkOutBtn}
                >
                    <Text>Adicionar ao carrinho</Text>
                </Pressable>
            </View>
        </ScrollView>
    )

}


const styles = StyleSheet.create({
    mainFrame: {
        height: 750,
        width: '90vw',
        padding: 10,
        borderRadius: 10,
        borderColor: '#6F6F6F61',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'space-around',
        alignItems: 'top'
    },
    iconColor: {
        color: '6c6c6c'
    },
    checkOutBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 220,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginTop: 20
    }
})



export default productPage