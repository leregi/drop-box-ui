import React from 'react'
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import { Appbar, } from 'react-native-paper' 

export default function AppBar() {
    return (
        <View>
            <Appbar  style={styles.appbar}>
                <Appbar.Action icon={require('../assets/icons/menus.png')} />
                <Appbar.Action icon={require('../assets/icons/bell.png')} />
            </Appbar>
        </View>
    )
}

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('screen').width,
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})



