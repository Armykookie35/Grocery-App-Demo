import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity  } from 'react-native';
import images from '../../Images';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Image source={images.Profile} style={styles.profile} />
          <View>
            <Text style={styles.smallText}>Good Morning</Text>
            <Text style={styles.medium}>Amelia Barlow</Text>
          </View>
        </View>
        <View style={styles.locationWrapper}>
          <Image source={images.location} style={styles.location} />
          <Text style={styles.smallText1}>My Flat</Text>
          {/* <Icon name="chevron-back" size={20} color="black" style={{marginTop:10}} /> */}
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchInput}>
          <Icon name="search" size={24} color="green" style={styles.icon1} />
          <Text style={styles.smallText2}>Search Category</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Image source={images.Fish} style={styles.fish} />
        <View >
          <Text style={styles.smalltext5}>Ramadan Offers</Text>
          <Text style={styles.bigText}>Get 25%</Text>
          <View style={styles.offerWrapper}>
            <Text style={styles.offerText}>Grab offer</Text>
            {/* <Icon name="chevron-back" size={24} color="black" style={styles.icon} /> */}
          </View>
        </View>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Categories 😁</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryItem}>
          <Image source={images.apple} style={styles.categoryImage} />
          <Text style={styles.appT}>Fruits</Text>
        </View>
        <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => navigation.navigate('ItemsScreen')}
      >
        <Image source={images.Brocolli1} style={styles.categoryImage} />
        <Text style={styles.appT}>Vegetables</Text>
      </TouchableOpacity>
        <View style={styles.categoryItem}>
          <Image source={images.cheese1} style={styles.categoryImage} />
          <Text style={styles.appT}>Dairy</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={images.meat1} style={styles.categoryImage} />
          <Text style={styles.appT}>Meat</Text>
        </View>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Best Selling 🔥</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.flex}>
          <Image source={images.pepper} style={styles.pepper}/>
          <Text style={styles.big2}>Bell pepper red</Text>
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
          
      <View style={styles.iconContainer}>
        <AntDesign name="home" size={24} color="#000" style={styles.icon} />
        <Icon name="grid" size={24} color="#ccc" style={styles.icon} />
        <Icon name="calendar" size={24} color="#ccc" style={styles.icon} />
        <AntDesign name="user" size={24} color="#ccc" style={styles.icon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bin:{
    height:30,
    width:30,
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
  main:{
    flexDirection:'row'
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
  appT:{
    fontSize: 14,
    marginLeft:0,
    color: '#000',
    fontWeight: 'bold',
  },
  top: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 100,
    marginTop: 28,
    marginLeft: 20,
    alignSelf: 'flex-start',
    borderColor: '#fff',
    borderWidth: 2,
  },
  smallText: {
    fontSize: 12,
    marginTop: 30,
    marginLeft: 5,
    color: '#6A7B81',
  },
  medium: {
    fontSize: 16,
    marginTop: 0,
    marginLeft: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  locationWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 42,
    width: 115,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginLeft: 60,
    borderRadius: 20,
    alignItems: 'baseline',
  },
  location: {
    width: 15,
    height: 18,
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'flex-end',
    borderColor: '#fff',
  },
  smallText1: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 5,
    color: '#000',
  },
  search: {
    marginTop: 15,
  },
  searchInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 42,
    width: 300,
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  smallText2: {
    fontSize: 14,
    marginLeft: 10,
    color: '#979899',
  },
  smalltext5:{
    fontSize: 12,
    marginLeft: 30,
    color: '#fff',
    marginTop:20
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#23AA49',
    marginTop: 20,
    height: 170,
    borderRadius: 20,
    width: 350,
  },
  fish: {
    width: 190,
    height: 170,
    
  },
  bigText: {
    color: '#fff',
    fontSize: 32,
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 20,
  },
  offerWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 38,
    width: 115,
    alignSelf: 'baseline',
    marginTop: 25,
    marginLeft: 30,
    borderRadius: 20,
  },
  offerText: {
    fontSize: 14,
    marginTop: 0,
    marginLeft: 5,
    color: '#23AA49',
    alignSelf: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  category: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  seeAllText: {
    color: 'green',
    marginLeft: 'auto',
    marginRight: 15,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryItem: {
    alignItems: 'center',
    margin: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginTop: 10,
    borderRadius: 30,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    height: 170,
    marginHorizontal: 10,
    backgroundColor: '#23AA49',
    borderRadius: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 30,
    alignSelf: 'center',
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
  all:{
    flexDirection:'row',
    marginBottom:20,
    justifyContent:'space-between',
  },
  icon2:{
    marginLeft:-30,
    marginTop:5,
  },
 iconContainer:{
  flexDirection:'row',
  justifyContent:'space-around',
 },
});

export default HomeScreen;
