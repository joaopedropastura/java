import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormComponent from '../../components/formComponent';
import UseBind from '../../hooks/useBind';


const RegisterPage = () => {

    const [cpf, setCpf] = useState('');
    const [number, onChangeNumber] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [bornDate, setBornDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')



    return (
        <View>
            <FormComponent 
                placeholder="Nome"
                value={name}
                type={number}
                onChange={setName}
            />
            <FormComponent 
                placeholder="CPF"
                value={cpf}
                type={number}
                onChange={setCpf}
            />
            <FormComponent 
                placeholder="Data de nascimento"
                type={number}
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
            
            <Button title='Registrar'/>

        </View>

    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
  

export default RegisterPage;