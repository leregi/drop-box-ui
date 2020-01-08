import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Card1Footer({title, substitle}) {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.substitle}>
                {substitle}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    footerContainer: {
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 15
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#212D4B'
    },
    substitle: {
        fontSize: 14,
        color: '#CED3DD'
    }
})
