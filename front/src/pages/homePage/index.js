
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { useState, useContext, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import ProductComponent from '../../components/productComponent';
import axios from 'axios'



const home = () => {
    const [arts, setArts] = useState([])
    const getArts = async () => {
        const res = await axios.get(`http://localhost:8080/product`)
        console.log(res.data)
        setArts(res.data)
    }

    useEffect(() => {
        getArts()
    }, [])

    
    return (
        <View style={styles.mainFrame}>
            {arts && arts.map((p, i) => <ProductComponent key={i} data={p}/>)}
        </View>
    )



}


const styles = StyleSheet.create({
    mainFrame: {
        gap: 10,
        display: 'flex', 
        flexWrap: 'wrap', 
        width: '100vw',
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default home