import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Circle from './Circle'
export default function Card1Head() {

    return (
        <View style={styles.cardHead}>
            <View style={styles.imgFolderContainer}>
                <Image source={require('../assets/icons/folder-blue.png')} style={styles.imgFolder} />
            </View>
            <View style={styles.circles}>
                <View style={styles.circle}>
                    <Circle imgPath={require('../assets/image/p.jpeg')} />
                </View>
                <View style={styles.circle}>
                    <Circle imgPath={require('../assets/image/p.jpeg')} />
                </View>
                <View>
                    <Circle imgPath={require('../assets/image/p.jpeg')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHead: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 15
    },
    circles: {
        width: 75,
        height: 30,
        flexDirection: 'row'
    },
    imgFolderContainer: {
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    imgFolder: {
        width: 30,
        height: 30
    },
    circle: {
        position: 'relative',
        marginRight: -8, 
    }
});
