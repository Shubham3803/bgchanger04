

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): React.JSX.Element {
 
  const [randomBackground, setRandoBackground] = useState("#ffffff");

  const generatecolor= ()=>{
    const hexRange = "0123456789ABCDEF";
    let color = "#"


    for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)]     
    }
    setRandoBackground(color)
  }

 

  return (
      <>
       <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor:randomBackground} ]}>
        <TouchableOpacity onPress={generatecolor}>
          <View style={styles.actionbutton}>
            <Text style={styles.actionbtntext}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  actionbutton:{
    borderRadius:12,
    backgroundColor:"#6A1bd4",
    paddingVertical:10,
    paddingHorizontal:14,

  },
  actionbtntext:{
    fontSize:24,
    color:"#fff",
    textTransform:"uppercase"
  }
});

export default App;
