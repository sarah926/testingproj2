/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Image,
  ImageBackground,
  FlatList, 
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
import * as data from './recipe_list.json';

type ItemProps = {title: string, image: string, speed: string, price: string, level: string};

const Item = ({title, image, speed, price, level}: ItemProps) => (
  <View style={styles.item}>
      <ImageBackground style={{width:"100%", height: "100%", borderRadius: 10,
}} source={{uri: image}} resizeMode='cover'>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{data.recipes[0].recipeAuthor}</Text>
          <Image style={{width: 20, height: 20, marginLeft: "60%"}}source={{uri: "https://www.pngall.com/wp-content/uploads/13/Red-Heart-PNG-Image-File.png"}}></Image>
        </View> 
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Image style={{width: 12, height: 12}}source={{uri: "https://i.pinimg.com/originals/92/13/df/9213df2e7622e767f9fd09fcd656c5cb.jpg"}}></Image>
          <Text style={styles.subtitle}>{speed}</Text>
          <Image style={{width: 12, height: 12}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4fVwrk12XVeUx2BrHd8KMf3LUSYLsZ8WCtxjjHj3Ng&s"}}></Image>
          <Text style={styles.subtitle}>{price}</Text>
          <Image style={{width: 12, height: 12}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Question_mark.png/640px-Question_mark.png"}}></Image>
          <Text style={styles.subtitle}>{level}</Text>
        </View>
    </ImageBackground>
  </View>
);

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <FlatList
      style={{
        backgroundColor: "white"
      }}
        data={itemData}
        renderItem={({item}) => <Item title={item.data.recipeName} image = {item.data.imageUrl} speed = {item.data.cookingTime} price= {item.data.amountOfIngredients} level={item.data.recipeDifficulty}/>}
        keyExtractor={item => item.data.recipeName}
        horizontal={false}
        numColumns={2}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 10,
    marginHorizontal: 10,
    width: "45%",
    maxHeight: 175,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginTop:"60%",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "white"
  },
  row: {
    flexDirection: 'row',
  }
});
const itemData = [
  {
    data: data.recipes[0]
  },
  {
    data: data.recipes[1]
  },
  {
    data: data.recipes[2]
  },
  {
    data: data.recipes[3]
  },
  {
    data: data.recipes[4]
  },
  {
    data: data.recipes[5]
  },
  {
    data: data.recipes[6]
  },
  {
    data: data.recipes[7]
  }
]

export default App;
