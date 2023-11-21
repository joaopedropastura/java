import React from 'react';
import { Button, Text, View, StyleSheet, Switch, Image, Pressable } from 'react-native';

const RulerLenghtComponent = () => {
    console.log('alo')
    return ( 
        <View style={styles.mainFrame}>
            <Text>Escolha o tamanho:(cm)</Text>
            <View style={styles.frame}>
                <View>
                    <Text>21x29</Text>
                </View>
                <View>
                    <Text>29x42</Text>
                </View>
                <View>
                    <Text>42x59</Text>
                </View>
                <View>
                    <Text>81x119</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mainFrame: {
        height: 20,
        gap: 10
    },
    frame: {
        height: 45,
        width: 300,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#6F6F6F61',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    }
})

export default RulerLenghtComponent