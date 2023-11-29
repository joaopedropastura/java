import FormComponent from "../../components/formComponent"
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import RulerLenghtComponent from "../../components/rulerLenghtComponent";
import ImagePicker from 'react-native-image-picker';

const ProductRegisterPage = () => {

    const [optionSize, setOptionSize] = useState('21x29')


    const selectImage = () => {
        const options = {
            noData: true,
        };

        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                console.log('image: ', response);
            }
        });
    }

    return (
        <View>
            <FormComponent
                placeholder={"título do anúncio"}
            />
            <FormComponent
                placeholder={"preço"}
            />
            <FormComponent
                placeholder={"Descrição"}
            />

            <View style={styles.container}>
                <Button title="Select Image" onPress={selectImage} />
            </View>


            <View style={styles.mainFrame}>
                <Text>Escolha o tamanho:(cm)</Text>
                <View style={styles.frame}>
                    <Pressable
                        onPress={() => changeSize('21x29')}
                        style={optionSize == '21x29' ? styles.selected : ''}
                    >
                        <Text>21x29</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => changeSize('29x42')}
                        style={optionSize == '29x42' ? styles.selected : ''}
                    >
                        <Text>29x42</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => changeSize('42x59')}
                        style={optionSize == '42x59' ? styles.selected : ''}
                    >
                        <Text>42x59</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => changeSize('81x119')}
                        style={optionSize == '81x119' ? styles.selected : ''}
                    >
                        <Text>81x119</Text>
                    </Pressable>
                </View>
            </View>


            <Pressable onPress={() => navigation.navigate('Register')}
            style={styles.registerBtn}
            >
                <Text style={{ color: '#fff' }}>Cadastrar</Text>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    frame: {
        height: 45,
        width: 300,
        borderWidth: 0,
        padding: 3,
        borderRadius: 10,
        // boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        alignItems: 'center',


    }, selected: {
        backgroundColor: '#fff',
        height: 38,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    registerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 220,
        backgroundColor: '#6c6c6c',
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
})

export default ProductRegisterPage