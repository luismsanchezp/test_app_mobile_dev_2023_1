import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';

import {Form} from './src/components/Form'

function App(): JSX.Element {
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleForm, setModalVisibleForm] = useState(false);
  const [usersList, setUsersList] = useState([]);

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
        <Text style={styles.btnTxtStyle}>Registration Form</Text>
      </Pressable>

      {/* Form */}
      <Form modalVisibleForm={modalVisibleForm} setModalVisibleForm={setModalVisibleForm} usersList={usersList} setUsersList={setUsersList}></Form>
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