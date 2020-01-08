import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper'

//import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ProgressBox() {
    return (
        <View style={styles.progressBox}>
            <View style={{flex: 2, flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700', paddingRight: 5}}>
                Dropbox
            </Text>
            <Text style={{color: 'white', fontSize: 20}}>
                Cloud
            </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{color: 'white', fontSize: 16}}>65Gb</Text>
                <Text style={{color: 'white', fontSize: 16}}>100Gb</Text>
            </View>
            <View>
                <ProgressBar progress={0.7} color={Colors.yellow700} />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    progressBox: {
        width: 270,
        height: 65,
        paddingHorizontal: 30
      }
});