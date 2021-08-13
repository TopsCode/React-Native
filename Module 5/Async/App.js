/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {

  const [value, setValue] = useState('')
  const [text, setText]=useState('')

  const storeData=async ()=>{
    try{
      await AsyncStorage.setItem('@storage_Key', text)
    }catch(e){
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const val = await AsyncStorage.getItem('@storage_Key')
      if(val !== null) {
        // value previously stored
        setValue(val)
      }
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }

  return (
    <View style={styles.sectionContainer}>
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Enter Message Here!!!"
        onChangeText={text => setText(text)}
      />
         <View style={styles.sectionContainer}>
    <Button
    style={styles.sectionTitle}
     title="Set"
     onPress={storeData}></Button>
     </View>
     <View style={styles.sectionContainer}>
      <Button
     title="Get"
     onPress={getData}></Button>
     </View>
     <Text style={{...styles.sectionContainer,...styles.highlight}}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    paddingVertical: 16,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize:36
  },
});

export default App;
