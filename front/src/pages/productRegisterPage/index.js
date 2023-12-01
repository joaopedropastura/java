import FormComponent from "../../components/formComponent"
import { StyleSheet, Button, Text, View, Image, Platform, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import RulerLenghtComponent from '../../components/rulerLenghtComponent'
import axios from 'axios'



const ProductRegisterPage = () => {

    const [optionSize, setOptionSize] = useState('21x29')
    const [imageUri, setImageUri] = useState(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const ImageInput = () => {

        if (Platform.OS === 'web') {
            // Código para input de imagem na web
            document.getElementById('imageInput').click();
        } else {
            // Código para react-native-image-picker em plataformas nativas
            const options = { noData: true };
            launchImageLibrary(options, response => {
                if (response.assets && response.assets[0].uri) {
                    setImageUri(response.assets[0].uri);
                }
            });
        }
    }

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImageUri(loadEvent.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    
    const newProduct = async () => {
        const product = {
            title,
            price,
            description,
            size : optionSize
        }
        console.log("product",product)
        try{
            const res = await axios.post(`http://localhost:8080/product`, product,{
                headers:{
                    "Authorization": "Bearer "+sessionStorage.getItem("token")
                }
            })
            console.log(res)
            navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <View style={styles.mainFrame}>
            <FormComponent
                placeholder={"título"}
                onChange={setTitle}
            />

            <TextInput
                style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                    borderColor: '#6F6F6F61',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
                }}
                placeholder={"Descrição"}
                multiline
                numberOfLines={4}
                onChangeText={setDescription}

            />
            <FormComponent
                placeholder={"preço"}
                onChange={setPrice}
            />

            <View>
                <Button title="Select Image" onPress={ImageInput} />
                {Platform.OS === 'web' && (
                    <input
                        id="imageInput"
                        type="file"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileInput}
                    />
                )}
                {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
            </View>


            <RulerLenghtComponent set={setOptionSize} />

            <View style={{ alignItems: 'center' }}>
                <Pressable onPress={() => newProduct()}
                    style={styles.registerBtn}
                >
                    <Text style={{ color: '#fff' }}>Cadastrar</Text>
                </Pressable>
            </View>

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

    mainFrame: {
        padding: 15,



    }
})

export default ProductRegisterPage