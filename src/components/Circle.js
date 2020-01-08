import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Circle({imgPath}) {
    return (
        <View style={styles.circle}>
            <Image source ={imgPath} style={styles.img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 30/2,
        borderWidth: 0.5,
        borderColor: 'red'
    },
    img: {
        height: 20,
        width: 20
    }
});
