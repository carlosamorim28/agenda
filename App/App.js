import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import firebase from 'firebase'
import { firebaseConfig } from './src/constants/FirebaseConfig';

export default function App() {
  firebase.initializeApp(firebaseConfig)
  return (
    <Routes/>
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
