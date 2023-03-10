import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';

import {Form} from './src/components/Form'
import {User} from './src/components/User'
import { Superhero } from './src/components/Superhero';
import { Formpractice} from './src/components/Formpractice';

function App(): JSX.Element {
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleForm, setModalVisibleForm] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [superHeroVisible, setSuperHeroVisible] = useState(false);
  const [formPracticeVisible, setFormPracticeVisible] = useState(false);
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      {/* Button 1 */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.debug('Users List: ', usersList)}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Log in</Text>
      </Pressable>

      {/* Button 3 */}
      <Pressable
        onPress={() => setModalVisibleForm(true)}
        style={styles.btnStyle2}>
        <Text style={styles.btnTxtStyle}>User Registration</Text>
      </Pressable>
      <Pressable
        onPress={() => setSuperHeroVisible(true)}
        style={styles.btnStyle2}>
        <Text style={styles.btnTxtStyle}>Super Hero</Text>
      </Pressable>
      
      <Pressable
        onPress={() => setFormPracticeVisible(true)}
        style={styles.btnStyle2}>
        <Text style={styles.btnTxtStyle}>Form Practice</Text>
      </Pressable>

      {/* Form Practice */}
      <Formpractice formPracticeVisible={formPracticeVisible} setFormPracticeVisible={setFormPracticeVisible}></Formpractice>

      <Superhero superHeroVisible={superHeroVisible} setSuperHeroVisible={setSuperHeroVisible}></Superhero>

      {/* Form */}
      <Form modalVisibleForm={modalVisibleForm} setModalVisibleForm={setModalVisibleForm} usersList={usersList} setUsersList={setUsersList}></Form>
      {/* {usersList.length === 0 ? (
        <Text>No hay usuarios</Text>
      ) : <FlatList 
            data={usersList}
            renderItem={({item}) => {
              return (<User 
                user_item={item}
                
              ></User>)
            }}
            />} */}
      {/* Slide window 1 */}
      <Modal animationType="slide" visible={modalVisible}>
        <Text>Ventana Modal</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  baseText: {
    fontSize: 25,
    /* Alinear Texto */
    textAlign: 'center',
    /* Negrilla */
    fontFamily: 'MountainsofChristmas-Regular',
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnStyle: {
    backgroundColor: '#2437DA',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    textTransform: 'capitalize',
  },
  btnStyle2: {
    backgroundColor: '#EA4918',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default App;