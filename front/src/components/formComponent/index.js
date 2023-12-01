import { Text, View, TextInput, StyleSheet } from 'react-native';

export default function FormComponent ({label, placeholder, text, value, onChange, keyboardType, multiline, numberOfLines}) {
    
    return (
        <View style={styles.componet}>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
            

            />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#6F6F6F61',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
    },
    componet: {
        paddingVertical: 10
    }
});
