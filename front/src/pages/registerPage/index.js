import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormComponent from '../../components/formComponent';
import UseBind from '../../hooks/useBind';


const RegisterPage = () => {

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [bornDate, setBornDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const [optionStyle, setOptionStyle] = useState('buyer')

    const changeContent = (item) => {
        setOptionStyle(item)
        if(item == 'seller')
        {
            setName('CNPJ')
        }
    }


    return (
        <View style={{padding: 10}}>
            <View style={{height: 70, paddingTop: 25}}>
                <Text >Dados pessoais</Text>
            </View>
            <View style={styles.options}>
                <View style={styles.option}>
                    <Pressable onPress={() => changeContent('buyer')}>
                        <Text>Quero comprar</Text>
                    </Pressable>
                    <View style={optionStyle == "buyer" ? styles.selected : ""}></View>
                </View>
                <View style={styles.option}>
                    <Pressable onPress={() => changeContent('seller')}>
                        <Text style={{fontSize: 13}}>Quero vender</Text>
                    </Pressable>
                    <View style={optionStyle == "seller" ? styles.selected : ""}></View>
                </View>
            </View>


            <FormComponent 
                placeholder="Nome"
                value={name}
                onChange={setName}
            />
            <FormComponent 
                placeholder="CPF"
                value={cpf}
                onChange={setCpf}
            />
            <FormComponent 
                placeholder="Data de nascimento"
                value={bornDate}
                onChange={setBornDate}
            />
            <FormComponent 
                placeholder="Email"
                value={email}
                onChange={setEmail}
            />
            <FormComponent 
                placeholder="Telefone"
                value={phone}
                onChange={setPhone}
            />
        
            <Text>Crie uma senha:</Text>
            

            <FormComponent 
                placeholder="Senha"
                value={password}
                onChange={setPassword}
            />
            
            <FormComponent 
                placeholder="Telefone"
                value={confirmPass}
                onChange={setConfirmPass}
            />
            
            <Pressable style={styles.registerBtn}>
                <Text
                    style={{color: 'white',
                    fontSize: 18,
                    fontWeight: '400',
                    wordWrap: 'break-word'
                    }}
                >
                    Registrar
                </Text>
            </Pressable>

        </View>

    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1
    },
    options: {
        flexDirection: 'row',
        gap: 20,
        height: 40
    },

    option: {
        gap: 8
    },
    selected: {
        width: 50,
        height: 4,
        backgroundColor: '#BBA9A6',
        borderRadius: 10,
        fontSize: 10,
        
    },
    registerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 220,
        backgroundColor: '#6c6c6c',
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
});
  

export default RegisterPage;