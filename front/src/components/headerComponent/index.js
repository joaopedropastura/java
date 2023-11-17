
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const headerComponent = () => {

    return (
        <View style={styles.component}>
            <SearchIcon/>
            <Image 
                source={require('../../../assets/logo2.png')}
                style={{height:50, width: 180}}
            />
            <FavoriteBorderIcon/>
            <ShoppingCartIcon/>

        </View>
    )
}


const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12, 
        justifyContent: 'space-between'
    }
})

export default headerComponent