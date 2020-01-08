import React from 'react'
import {  Image, StyleSheet } from 'react-native'
import { Surface } from 'react-native-paper'

export default function DropBoxLogo() {
    return (
        <Surface style={styles.imgBox}>
            <Image source={require('../assets/image/drop.png')} style={styles.img} />
        </Surface> 
    )
}


const styles = StyleSheet.create({
    imgBox: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: '#ffffff',
        elevation: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      img: {
        width: 40,
        height: 40,
      }, 
})
