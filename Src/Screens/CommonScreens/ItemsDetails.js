import { SafeAreaView, StyleSheet, Text,Image,TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../../Images';
import { useNavigation } from '@react-navigation/native';


const ItemsDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.contain}>
      <View style={styles.category}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={22} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Icon name="search" size={21} color="black" style={styles.icon} />
      </View>
      <Image source={images.ginger} style={styles.img} />
    </View>
    <View style={styles.main}>
      <View style={styles.box}>
        <View style={styles.textbox}>
          <Text style={styles.big2}>Arabic Ginger</Text>
          <Text style={styles.small}>1kg, 4$</Text>
        </View>
        <View style={styles.ico}>
          <View style={styles.iconWrapper}>
            <AntDesign name="minus" size={22} color="black" style={styles.ico1} />
          </View>
          <Text style={{fontsize:18}}>4</Text>
          <View style={styles.iconWrapper2}>
            <AntDesign name="plus" size={22} color="black" />
          </View>
        </View>
      </View>
      <View>
        <Text style={{alignSelf:'center', margin:8, fontSize:16,color:'#979899'}}>
          Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.
        </Text>
      </View>
     <View style={{flexDirection:'row' ,justufyContent:'space-between'}}>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-around',width:157 ,height:63,borderWidth:1,borderColor:'#ccc',borderRadius:20,}}>
       <Image source={images.hand} style={styles.hand}/>
       <View style={{marginTop:8}}>
        <Text style={{color:'green',fontsize:16,fontweight:'bold'}}>100%</Text>
        <Text style={{color:'#979899'}}>Organic</Text>
       </View>
      </View>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-around',width:157 ,height:63,borderWidth:1,borderColor:'#ccc',borderRadius:20,}}>
       <Image source={images.Calendar} style={styles.hand}/>
       <View style={{marginTop:8}}>
        <Text style={{color:'green',fontsize:16,fontweight:'bold'}}>1 Year</Text>
        <Text style={{color:'#979899'}}> Expiration</Text>
       </View>
      </View>
      </View>
      <View style={{flexDirection:'row' ,justufyContent:'space-around'}}>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-around',width:157 ,height:63,borderWidth:1,borderColor:'#ccc',borderRadius:20,}}>
       <Image source={images.Star} style={styles.hand}/>
       <View style={{marginTop:8}}>
        <Text style={{color:'green',fontsize:16,fontweight:'bold'}}>4.8</Text>
        <Text style={{color:'#979899'}}>Reviews</Text>
       </View>
      </View>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-around',width:157 ,height:63,borderWidth:1,borderColor:'#ccc',borderRadius:20,}}>
       <Image source={images.Fire} style={styles.hand}/>
       <View style={{marginTop:8}}>
        <Text style={{color:'green',fontsize:16,fontweight:'condensed-bold'}}>80 Kcal</Text>
        <Text style={{color:'#979899'}}>100g</Text>
       </View>
      </View>
      </View>
    </View>
    <TouchableOpacity 
           onPress={() => navigation.navigate('CartScreen')}
           >
        <Text style={styles.Buttontext}>
          Add To Cart
        </Text>
        </TouchableOpacity>
  </SafeAreaView>
  )
}

export default ItemsDetails

const styles = StyleSheet.create({

  icon: {
    margin:30,
    marginTop:0,
    borderWidth:1,
    borderColor:'#ccc',
    padding:5,
    borderRadius:50,
    backgroundColor:'white',
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
  hand:{
    height:45,
    width:45,
    marginTop:8
  },
  category: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent:'space-between'
  },
  contain:{
    
    backgroundColor:'#F3F5F7',
    height:350,
  
    
  },
  img:{
    height:224,
    width:249,
    alignSelf:'center',
  },
  container:{
  flex:1,
  backgroundColor:'#fff',
},
big2:{
  fontSize: 15,
  // marginLeft: 10,
  color: '#000',
  fontWeight: 'bold',
  marginLeft: 20,
},
small:{
  fontSize: 16,
  color: 'red',
  marginLeft:20,
},
main:{
  marginTop:30,
},
box:{
  flexDirection:'row',
  justifyContent:'space-between',
  
},
ico:{
  flexDirection:'row',
  justifyContent:'space-between'
},
iconWrapper:{
  width: 36,
  height: 36,
  marginBottom:20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc', 
  borderRadius: 18, 
  margin:10,
  marginTop:-5
},
iconWrapper2:{
  width: 36,
  height: 36,
  marginBottom:20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'green', 
  borderRadius: 18, 
  margin:10,
  marginTop:-5
  },
})