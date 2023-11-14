import { Text, View, TextInput, StyleSheet } from 'react-native';

export default function FormComponent ({label, placeholder, text, value, onChange, type}) {
    
    return (
        <View style={styles.componet}>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={type}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    componet: {
        padding: 10
    }
});
