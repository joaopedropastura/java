
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


const headerComponent = () => {

    return (
        
        <View style={styles.component}>
            <MenuIcon style={styles.iconColor}/>
            <SearchIcon style={styles.iconColor}/>
            <Image 
                source={require('../../../assets/logo2.png')}
                style={{height:50, width: 180}}
            />
            <FavoriteBorderIcon style={styles.iconColor}/>
            <ShoppingCartIcon style={styles.iconColor}/>

        </View>
    )
}


const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12, 
        justifyContent: 'space-between',
        width: '100vw',
        height: 'auto'
    },
    iconColor: {
        color: '6c6c6c'
    }
})

export default headerComponent