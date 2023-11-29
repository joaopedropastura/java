import { Button, Text, TextInput, View, StyleSheet, Switch, Image, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import FormComponent from '../../components/formComponent';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigation = useNavigation()
    const goToHome = async () => {

        const user = {
            email,
            password
        }

        try{
            const res = await axios.post("http://localhost:8080/user/auth/login", user)
            sessionStorage.setItem('token', res.data)
            navigation.navigate("Home")
        } catch(error) {
            return "usuario ou senha inválidos!"
        }
        
    }

    return (
        <View style={{ gap: 10, padding: 30, height: '100%', justifyContent: 'space-between' }}>

            <View style={{  flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>identifique-se para continuar</Text>
                <Pressable onPress={() => goToHome()}>
                    <Text>X</Text>
                </Pressable>
            </View>
            <View style={{  alignItems: 'center' }}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={{ height: 140, width: 260}}
                />
            </View>
            <View style={{justifyContent: 'flex-end'}}>
                <FormComponent
                    placeholder='Enter your email'
                    onChange={email => setEmail(email)}
                />
                <FormComponent
                    placeholder='Enter your password'
                    onChange={password => setPassword(password)}
                    secureTextEntry={true}
                />
                <Text style={{ textDecorationLine: 'underline' }}>Esqueci minha senha</Text>
            </View>


            <View style={styles.registerButtonView}>

                <Pressable onPress={() => goToHome()} style={styles.registerBtn}>
                    <Text>Home</Text>
                </Pressable>
                <Text>Ainda não tem uma conta?
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text style={{ textDecorationLine: 'underline' }}>Cadastre-se</Text>
                    </Pressable>
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
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
    registerButtonView: {
        alignItems: 'center',
        height: 100,
        justifyContent: 'center',
        gap: 10
    }
})





export default Login;