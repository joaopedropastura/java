import { Text, View, TextInput } from 'react-native';

export default function FormComponent ({label, placeholder, text, value, onChange, type}) {
    
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType={type}
            />
        </View>
    )

}


