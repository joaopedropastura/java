import { Button, Text, TextInput, View, StyleSheet, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContext } from './context'

const Login = (props) => {

    const {data, setData} = useContext(UtilsContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goToHome = () => {

        let sla = true
        data.newUser.map((item) => {
            if (item.email == email && item.password == password) {
                sla = false
                return props.navigation.navigate("Home")
            }
        })
        if (sla)
            return alert('Invalid email or password')
    }

    return (
      <View style={{gap: 10, padding: 30, height: '100%', justifyContent: 'space-between'}}>
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder='Enter your email'
                onChangeText={email => setEmail(email)}
                style={styles.textInput}

            />
            <Text>Password</Text>
            <TextInput
                placeholder='Enter your password'
                onChangeText={password => setPassword(password)}
                style={styles.textInput}
                secureTextEntry={true}

            />
        </View>


        <View style={{gap: 10}}>
            
            <Button onPress={() => goToHome()}
            title='Home'
            ></Button>
            <Button onPress={() => props.navigation.navigate("Register")} 
                title='Register'
            ></Button>
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
})


export default Login;