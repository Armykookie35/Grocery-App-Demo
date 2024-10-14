import { StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../../Images';
const CartScreen = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaView>
 <View style={styles.category}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={22} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.categoryTitle}>Cart 🛒</Text>
  
    </View>
    
      <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
        <Image source={images.pepper} style={styles.pepper}/>
        <View>
          <Text style={{fontSize:14, fontWeight:'bold'}} >Bell Pepper Red</Text>
          <Text style={{color:'red'}}>1kg, 6$</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
        <View style={styles.iconWrapper}>
            <AntDesign name="minus" size={22} color="black" style={styles.ico1} />
          </View>
          <Text style={{fontsize:18}}>2</Text>
          <View style={styles.iconWrapper2}>
            <AntDesign name="plus" size={22} color="white" />
          </View>
          </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
        <Image source={images.pawpaw} style={styles.pepper}/>
        <View>
          <Text style={{fontSize:14, fontWeight:'bold'}} >Butternut Squash</Text>
          <Text style={{color:'red'}}>1kg, 8$</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
        <View style={styles.iconWrapper}>
            <AntDesign name="minus" size={22} color="black" style={styles.ico1} />
          </View>
          <Text style={{fontsize:18}}>4</Text>
          <View style={styles.iconWrapper2}>
            <AntDesign name="plus" size={22} color="white" />
          </View>
          </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
        <Image source={images.ginger} style={styles.pepper}/>
        <View>
          <Text style={{fontSize:14, fontWeight:'bold'}} >Arabic Ginger</Text>
          <Text style={{color:'red'}}>1kg, 4$</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
        <View style={styles.iconWrapper}>
            <AntDesign name="minus" size={22} color="black" style={styles.ico1} />
          </View>
          <Text style={{fontsize:18}}>6</Text>
          <View style={styles.iconWrapper2}>
            <AntDesign name="plus" size={22} color="white" />
          </View>
          </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
        <Image source={images.Carrot} style={styles.pepper}/>
        <View>
          <Text style={{fontSize:14, fontWeight:'bold'}} >Organic Carrots</Text>
          <Text style={{color:'red'}}>1kg, 4$</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
        <View style={styles.iconWrapper}>
            <AntDesign name="minus" size={22} color="black" style={styles.ico1} />
          </View>
          <Text style={{fontsize:18}}>2</Text>
          <View style={styles.iconWrapper2}>
            <AntDesign name="plus" size={22} color="white" />
          </View>
          </View>
      </View>
    
    <TouchableOpacity 
           onPress={() => navigation.navigate('HomeScreen')}
           >
        <Text style={styles.Buttontext}>
          Checkout
        </Text>
        </TouchableOpacity>
   </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent:'space-between',
    marginBottom:20,
  },
  icon: {
    marginLeft:20,
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
    marginTop: 300,
    alignSelf:'center',
    fontSize: 18,
    width:'85%',
    height:53,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight:150,
    marginTop:10
  },
  pepper:{
    height:42,
    width:48,
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