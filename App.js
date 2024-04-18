import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import patika from './src/patika.json';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.item}>
    <Image source={{ uri: item.imgURL }} style={styles.image} />
      <Text>Title: {item.title}</Text>
      <Text>Price: {item.price}</Text>
      <Text style={item.inStock ? styles.inStockText : styles.outOfStockText}>
     {item.inStock ? "" : "STOKTA YOK"}
</Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Patika Store</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={patika}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={windowWidth >= 300 ? 2 : 1} 
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    width: (windowWidth - 30) / 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  searchBar: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#ECEFF1",
  },
  inStockText: {
    color: 'black', // Change to desired color for in-stock items
  },
  outOfStockText: {
    color: 'red', // Change to desired color for out-of-stock items
  },
});
