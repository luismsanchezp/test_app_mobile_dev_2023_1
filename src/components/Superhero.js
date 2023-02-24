import React from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, View, ScrollView, Pressable, Text} from 'react-native';
import { Title } from 'react-native-paper';

export const Superhero = ({superHeroVisible, setSuperHeroVisible}) => {
  return (
    <Modal animationType='slide' style={styles.view} visible={superHeroVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
            <View style={styles.view_elements}>
            
              <Title style={styles.title}>Super Hero</Title>
              <Image style={styles.logo} source={require('./logo.png')}></Image>
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
        </ScrollView>
      </SafeAreaView>
    </Modal>
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