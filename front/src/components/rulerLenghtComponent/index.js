import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Switch, Image, Pressable } from 'react-native';

const RulerLenghtComponent = () => {

    const [optionSize, setOptionSize] = useState('21x29')
    const [price, setPrice] = useState(299.00)
    
    const changeSize = (size) => {
        setOptionSize(size)
    }

    return ( 
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
    )

}

const styles = StyleSheet.create({
    mainFrame: {
        gap: 10,
        height:110
    },
    frame: {
        height: 45,
        width: 300,
        borderWidth: 0,
        padding: 3,
        borderRadius: 10,
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        alignItems: 'center'

    },
    selected: {
        backgroundColor: '#fff',
        height: 35,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})

export default RulerLenghtComponent