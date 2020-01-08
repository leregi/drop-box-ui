

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  StyleSheet
} from 'react-native';

import { Surface } from 'react-native-paper'


import AppBar from './components/AppBar'
// import Card1 from './components/Card1';
import DropBoxLogo from './components/DropBoxLogo';
import ProgressBox from './components/ProgressBox';
import Line from './components/Line';
import Card2 from './components/Card2';
import Card1Head from './components/Card1Head'

const DATA = [
  {
    id: '1',
    title: 'My Developmen',
    substitle: 'Created: 12.01.2020'
  },
  {
    id: '2',
    title: 'My Developmen',
    substitle: 'Created: 12.01.2020'
  },
  {
    id: '3',
    title: 'My Developmen',
    substitle: 'Created: 12.01.2020'
  },
];

function Card1({title, substitle}) {
  return (
    <View style={styles.card1}>
        <Surface style={styles.surface}>
            <Card1Head />
            <View style={styles.footerContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.substitle}>
                    {substitle}
                </Text>
            </View>
        </Surface>
    </View>
  );
}

const App = () => {
  return (
    <View>
        <View style={styles.head}>
            <AppBar />
            <View style={styles.part1}>
                <DropBoxLogo />
                <ProgressBox />
            </View>
            <Line />
        </View>
        <View style={styles.part2}>
            <View style={{marginTop: 30, marginBottom: 15}}>
              <Text style={{fontSize: 18, color: '#9FA7B4'}}>Folders</Text>
            </View>
            <SafeAreaView style={{ width: Dimensions.get('screen').width}}>
                <FlatList 
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={DATA}
                  renderItem={({item}) => <Card1 title={item.title} substitle={item.substitle}
                  />}
                  keyExtrator={item => item.id}
                />
            </SafeAreaView>
            <View>
              <View style={styles.fileContainer}>
                <Text style={{paddingRight: 5, color: '#9FA7B4', fontWeight: '700', fontSize: 18}}>                  
                    Last Files:
                </Text>
                <Text style={{fontSize: 18, color: '#C7CCD4'}}>
                  Google Disk
                </Text>
              </View>
              <Card2 />
              <Card2 />
            </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    position: 'relative',
    backgroundColor: '#3D72DE',
    height: 280,
  },
  part1: {
    flex: 1, 
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 30
  },
  part2: {
    width: Dimensions.get('screen').width, 
    height: Dimensions.get('screen').height - 280, 
    paddingHorizontal: 40, 
    position: 'relative', 
    backgroundColor: '#F1F5F9', 
    marginTop: -35, 
    borderTopLeftRadius: 35, 
    borderTopRightRadius: 30
  },
  fileContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },

  card1: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  surface: {
      height: 110,
      width: 220,
      elevation: 6,
      borderRadius: 15
  },
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
    
export default App;
