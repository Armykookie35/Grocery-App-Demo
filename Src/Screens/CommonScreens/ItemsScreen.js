import { View, Text,ScrollView, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ItemsScreen = () => {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
  <ScrollView>
    <View style={styles.category}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={22} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.categoryTitle}>Vegetables 🌽</Text>
      <Icon name="search" size={21} color="black" style={styles.icon} />
    </View>
    <View style={styles.main}>
        <View style={styles.flex}>
          <Image source={images.pepper} style={styles.pepper}/>
          <Text style={styles.big2}>Bell pepper red</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 6$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
        <TouchableOpacity    
        onPress={() => navigation.navigate('ItemDetailsScreen')}>
        <View style={styles.flex}>
        <Image source={images.ginger} style={styles.pepper}/>
          <Text style={styles.big2}>Arabic Ginger</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 4$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image source={images.cabbage} style={styles.pepper}/>
          <Text style={styles.big2}>Fresh lettuce</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 2$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
        <View style={styles.flex}>
        <Image source={images.pawpaw} style={styles.pepper}/>
          <Text style={styles.big2}>Butternut Squash</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 8$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image source={images.Carrot} style={styles.pepper}/>
          <Text style={styles.big2}>Organic Carrots</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 4$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
        <View style={styles.flex}>
        <Image source={images.veg} style={styles.pepper}/>
          <Text style={styles.big2}>Fresh Brocolli</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 2$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image source={images.Cheese} style={styles.pepper}/>
          <Text style={styles.big2}>Cheese</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 4$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
        <View style={styles.flex}>
        <Image source={images.raw} style={styles.pepper}/>
          <Text style={styles.big2}>Lamb meat</Text>
          <View style={styles.all}>
          <Text style={styles.small}>1kg, 45$</Text>
          <View style={styles.iconWrapper}></View>
          <AntDesign name="plus" size={24} color="white" style={styles.icon2} />
          </View>
        </View>
      </View>
  </ScrollView>
  </SafeAreaView>
  );
}

export default ItemsScreen

const styles = StyleSheet.create({

  category: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent:'space-around'
  },
  icon: {
    marginLeft:-10,
    marginTop:0,
    borderWidth:1,
    borderColor:'#ccc',
    padding:5,
    borderRadius:50,
    backgroundColor:'white',
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  flex:{
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
    height: 214,
    width:160,
    marginBottom: 20,
    shadowColor: '#F3F5F7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  pepper:{
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  main:{
    flexDirection:'row'
  },
  all:{
    flexDirection:'row',
    marginBottom:20,
    justifyContent:'space-between',
  },
  small:{
    fontSize: 16,
    color: 'red',
    marginLeft:10,
  },
  big2:{
    fontSize: 15,
    // marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 0,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green', 
    borderRadius: 18, 
    marginLeft:30,
  },
  icon2:{
    marginLeft:-30,
    marginTop:5,
  },
})