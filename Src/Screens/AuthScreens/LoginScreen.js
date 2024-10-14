import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import images from '../../Images';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.screen}>
       <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="black"  style={styles.icon}/>
        </TouchableOpacity>
     <Image source={images.leaf5}  style={styles.Leaf} />
     <Text style={styles.text}>
     Enter your mobile number
     </Text>
     <Text style={styles.smalltext}>
     We'll send you a verification code 
     </Text>
     
      <View style={styles.inputC}>
        <Text style={styles.countryCode}>+44</Text>
        <TextInput
          style={styles.input}
          placeholder="(000) 000-00-00"
          keyboardType="phone-pad"
        />
        </View>
        <TouchableOpacity 
           onPress={() => navigation.navigate('HomeScreen')}
           >
        <Text style={styles.Buttontext}>
          Continue
        </Text>
        </TouchableOpacity>
        <Text style={styles.smalltext}>
          By clicking on “Continue” you are agreeing to our terms of use 
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
 
  
  Leaf: {
    width: 66,
    height: 66,
    alignSelf:'center',
    marginTop:30,
    marginBottom:20,
    marginLeft: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

 input: {
    width: 275,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 0,
    marginTop: 20,
    fontSize:22,
    paddingHorizontal: 10,
    fontWeight:'bold',
    alignSelf:'center',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  back: {
   alignSelf:'flex-start',
   marginTop:34,
   width:44,
   height:44,
   marginLeft:20,
   borderWidth:1,
   borderColor:'#F1F1F5',
   borderRadius:24,
   
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent:'center',
  },
  icon: {
    marginLeft:7,
    marginTop:10,
  },
  text: {
   fontSize:32,
   fontWeight:'bold',
   textAlign:'center'
  },
  smalltext: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color:'#6A7B81',
    alignSelf:'center',
  },
  inputC: {
    flexDirection:'row',
    alignContent:'center'
  },
  countryCode: {
    width: 50,
    height: 45,
    alignContent:'center',
    borderColor: '#ccc',
    borderWidth:0,
    marginTop: 40,
    textAlign:'auto',
    fontSize:18,
    paddingHorizontal: 10,
    marginLeft:15,
  },
  Buttontext: {
    backgroundColor: '#23AA49',
    color: 'white',
    padding: 15,
    borderRadius: 30,
    elevation:5,
    marginTop: 40,
    alignSelf:'center',
    fontSize: 18,
    width:'85%',
    height:53,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


