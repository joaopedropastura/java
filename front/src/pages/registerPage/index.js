import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import FormComponent from '../../components/formComponent';
import UseBind from '../../hooks/useBind';


const RegisterPage = () => {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    const [phone, setPhone] = UseBind('')

    useEffect(() => {
        console.log(phone)
    }, [phone])

    return (
        <View>
            <Text>Register</Text>
            <FormComponent style={styles.input}
                label="informe seu telefone" 
                placeholder="digite aqui seu telefone"
                value={phone}
                type={number}
            />

            <TextInput 
                style={styles.input}
                value={phone}
                {...setPhone}
            />


            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Digite seu nome"
            />
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Digite seu nome"
            />
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                />

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