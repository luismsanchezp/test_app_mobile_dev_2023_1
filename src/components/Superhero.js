import React from 'react';
import {
  Image, 
  Modal, 
  SafeAreaView, 
  StyleSheet, 
  View,
  Pressable, 
  Text
} from 'react-native';

export const Superhero = ({superHeroVisible, setSuperHeroVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType='slide' style={styles.view} visible={superHeroVisible}>
        <View style={styles.view_elements}>
          <Text style={styles.title}>Super Hero</Text>
          <Image style={styles.logo} source={require('../assets/PNG/logo.png')}></Image>
          <Pressable
              style={styles.exit_window}
              onPress={() => {
                  setSuperHeroVisible(!superHeroVisible);
              }}>
              <Text 
                  style={styles.text_close_window}
              >Close</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  view_elements: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(13,84,146)',
  },
  logo: {
    width: 330, 
    height: 180,
    margin: 20,
  },
  exit_window: {
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: 'rgb(13,84,146)',
    borderRadius: 10,
    padding: 15,
  },
  text_close_window: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      textTransform: 'uppercase',
  },
});

