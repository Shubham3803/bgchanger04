

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
 
  const [randomBackground, setRandoBackground] = useState(["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff" ]);

  const generatecolor= ()=>{
    const hexRange = "0123456789ABCDEF";

  

    const getcolor= () => {
      let color = "#"

      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)]     
    }
    return color;
  }
  setRandoBackground([getcolor(),getcolor(), getcolor(), getcolor(), getcolor()])
  
  }

 

  return (
      <>
       {/* <StatusBar backgroundColor={randomBackground[0]} /> */}

            

      <View style={[styles.container, {backgroundColor: randomBackground[4]} ]}>

            <View style={styles.one}>
                <View style={[styles.rectangle, {backgroundColor:randomBackground [0]}]}>
                  <Text style={styles.actionbtntext}>shubham</Text>
                </View>

                <View style={[styles.rectangle, {backgroundColor:randomBackground [1]}]}>
                  <Text style={styles.actionbtntext}>shubham</Text>
                </View>
            </View>

            

        <TouchableOpacity onPress={generatecolor}>

          <View style={styles.actionbutton}>
            <Text style={styles.actionbtntext}>Press Me</Text>
          </View>

        </TouchableOpacity>

            <View style={styles.one}>
                <View style={[styles.rectangle, {backgroundColor:randomBackground[2]}]}>
                  <Text style={styles.actionbtntext}>shubham</Text>
                </View>

                <View style={[styles.rectangle, {backgroundColor:randomBackground[3]}]}>
                  <Text style={styles.actionbtntext}>shubham</Text>
                </View>
            </View>

      </View>

          


      </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    
  },
  one:{
    flex:1,
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    justifyContent:"center",
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
  },
  rectangle:{
    paddingTop:10,
    paddingBottom:10,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    color:"#fff",
    borderRadius:12
  }
});

export default App;
