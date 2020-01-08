import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'

export default function Card2() {
    return (
        <View style={styles.card2Container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/icons/paper1.png')} style={styles.img} />
            </View>
            <View style={styles.fileNameAndRoutes}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, fontWeight: '700'}}>BrandBook</Text>
                    <Text style={{color: '#7D879D'}}>.PDF</Text>
                </View>
                <Text style={{color: '#D1D3DE'}}>
                    DropBox/Project/Ei/BrandBook
                </Text>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card2Container: {
        width: Dimensions.get('screen').width - 70,
        height: 90,
        marginVertical: 15,
        backgroundColor: '#E9EDF0',
        borderRadius: 20,
        flexDirection: 'row'
    },
    imgContainer: {
        marginVertical: 15,
        marginLeft: 15
    },
    img: {
        width: 50,
        height: 50
    },
    fileNameAndRoutes: {
        marginTop: 15,
        marginLeft: 15
    }
})
