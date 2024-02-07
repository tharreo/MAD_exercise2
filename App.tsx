import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export const shoppingImages = [
  {
    id: 1,
    url: {
      uri: 'https://i.pinimg.com/564x/2a/b2/64/2ab26454f987aaa46d4ffea1272d8d65.jpg',
    },
    title: 'happy',
  },
  {
    id: 2,
    url: {
      uri: 'https://i.pinimg.com/564x/fd/76/e1/fd76e11302b0ca223c92ffbc89fde91c.jpg',
    },
    title: 'angry',
  },
  
  {
    id: 3,
    url: {
      uri: 'https://i.pinimg.com/564x/ee/12/df/ee12dfb1a6f69eb9f6cd064271f4903a.jpg',
    },
    title: 'shy',
  },

  {
    id: 4,
    url: {
      uri: 'https://i.pinimg.com/564x/d8/31/43/d83143907f771a52c1366b3ae88f82ac.jpg',
    },
    title: 'hungry',
  },
  // Add more shopping images as needed
];

export default function ShoppingTheme() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#FFFFFF' // Set text color to white
        }}>
        CatLuvie
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor={'#A4B0BD'}
        />
      </View>
      <ScrollView horizontal={true}>
        {shoppingImages.map(item => {
          return (
            <View style={styles.imageCard} key={item.id}>
              <Image source={item.url} style={styles.image} />
              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown', 
    padding: 8,
  },
  imageCard: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 100,
  },

  titleStyle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
    marginRight: 15,
    color: '#FFFFFF' 
  },
  searchContainer: {
    marginTop: 16, // Add margin from the shopping images
    alignItems: 'center', // Center the search input horizontally
  },
  search: {
    height: 44,
    backgroundColor: '#F1EFEF',
    borderRadius: 16,
    marginTop: 8, // Adjust margin from the search container
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '80%', // Set the width of the search input
    color: '#2F363F',
  }
});
