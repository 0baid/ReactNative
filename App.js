import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CarList from './components/CarList'
import Header from './components/Header';



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <CarList/>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
