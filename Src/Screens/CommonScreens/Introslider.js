import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../Images'
import { useNavigation } from '@react-navigation/native';

const Introslider = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
        <Image source={images.leaf4} style={styles.leaf4} />
       <Image source={images.Leaf} style={styles.Leaf} />
       <Text style={styles.text}>Get your groceries delivered to your home</Text>
       <Text style={styles.small}>The best delivery app in town for delivering your daily fresh groceries</Text>
       <TouchableOpacity 
           onPress={() => navigation.navigate('LoginScreen')}
           >
        <Text style={styles.Buttontext}>
          Shop Now
        </Text>
       </TouchableOpacity> 
       <Image source={images.leaf2} style={styles.leaf2} />
       <Image source={images.Shop} style={styles.Shop} />
    </SafeAreaView>
  )
}

export default Introslider

const styles = StyleSheet.create({

  Leaf: {
    width: 66,
    height: 66,
    alignSelf:'center',
    marginTop:40,
    marginLeft: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  small: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color:'#6A7B81',
  },
  Shop: {
    Width:540,
    height: 360,
    // marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  Buttontext: {
    backgroundColor: '#23AA49',
    color: 'white',
    padding: 15,
    borderRadius: 30,
    elevation:5,
    marginTop: 20,
    alignSelf:'center',
    fontSize: 18,
    width:190,
    height:53,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  leaf4: {
    width:45.39,
    height:38.91,
    marginTop:31,
    alignSelf:'flex-end',
  },
  leaf2: {
    width:33.09,
    height:28.36,
    alignSelf:'flex-start',
  },
  leaf3: {
    width:33.09,
    height:28.36,
    marginTop:20,
    alignSelf:'center',
  },
 
})