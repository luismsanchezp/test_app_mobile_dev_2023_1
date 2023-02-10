import React, { useState } from 'react'
import { 
    Modal,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Pressable,
    Alert
} from 'react-native'
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';

export const Form = ({modalVisibleForm, setModalVisibleForm}) => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [dateBirth, setDateBirth] = useState(new Date());
    const [userGender, setUserGender] = useState('');

    const handlerNewUser = () => {
        if([userName, userSurname, userEmail, dateBirth, userGender].includes('')){
            console.log('Error: Empty fields');
            Alert.alert(
                'Error',
                'Empty fields',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                    },
                ],
                { cancelable: false }
            );
        } else {
            const newUser = {
                name: userName,
                surname: userSurname,
                email: userEmail,
                birthDate: dateBirth,
                userGender: userGender
            }
            console.log('New user created: ', newUser);
            setModalVisibleForm(!modalVisibleForm);
            cleanFields();
        }
    }

    const cleanFields = () => {
        setUserName('');
        setUserSurname('');
        setUserEmail('');
        setDateBirth(new Date());
        setUserGender('');
    }

    console.log('userName: ', userName);
    console.log('userSurname: ', userSurname);
    console.log('userEmail: ', userEmail);
    console.log('dateBirth: ', dateBirth);
    console.log('userGender: ', userGender);

    return (
        <Modal animationType='slide' visible={modalVisibleForm}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    {/*Form Title'*/}
                    <Text 
                        style={styles.formTitle}
                    >Sign Up {''}
                        {/*Form Subtitle'*/}
                        <Text 
                            style={styles.textSubtitle}
                        >User UAM</Text>
                    </Text>
                    {/*Close window button*/}
                    <Pressable
                        style={styles.exit_window}
                        onPress={() => {
                            setModalVisibleForm(!modalVisibleForm);
                            cleanFields();
                        }}>
                        <Text 
                            style={styles.text_close_window}
                        >Cancelar</Text>
                    </Pressable>
                    {/*Form fields*/}
                    <Text 
                        style={styles.textTitle}
                    >Name</Text>
                    <TextInput
                        placeholder='Your name'
                        autoCapitalize='words'
                        autoCorrect={false}
                        value={userName}
                        onChangeText={setUserName}
                        style={styles.textBox}
                    ></TextInput>
                    <Text 
                        style={styles.textTitle}
                    >Surname</Text>
                    <TextInput
                        placeholder='Your surname'
                        autoCapitalize='words'
                        autoCorrect={false}
                        value={userSurname}
                        onChangeText={setUserSurname}
                        style={styles.textBox}
                    ></TextInput>
                    {/*Gender radio buttons*/}
                    <View style={styles.containerGender}>
                        <Text
                            style={styles.textTitle}
                        >Gender</Text>
                        <View 
                            style={styles.containerGenderRadioButtons}
                        >
                            <RadioButton
                                color='#92b5be'
                                value="F"
                                status={ 
                                    userGender === 'F' ? 'checked' : 'unchecked' 
                                }
                                onPress={() => setUserGender('F')}
                            />
                            <Text>Female</Text>
                        </View>
                        <View 
                            style={styles.containerGenderRadioButtons}
                        >
                            <RadioButton
                                color='#92b5be'
                                value="M"
                                status={ 
                                    userGender === 'M' ? 'checked' : 'unchecked' 
                                }
                                onPress={() => setUserGender('M')}
                            />
                            <Text>Male</Text>
                        </View>
                    </View>
                    <Text
                        style={styles.textTitle}
                    >Birth Date</Text>
                    <View 
                        style={styles.datePicker}
                    >
                        <DatePicker
                            locale='en_US'
                            mode='date'
                            date={dateBirth}
                            minimumDate={new Date(1900, 0, 1)}
                            maximumDate={new Date()}
                            onDateChange={setDateBirth}
                        />
                    </View>
                    <Text 
                        style={styles.textTitle}
                    >Email</Text>
                    <TextInput
                        placeholder='name@email.com'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType='email'
                        value={userEmail}
                        onChangeText={setUserEmail}
                        style={styles.textBox}
                    ></TextInput>
                    <View 
                        style={styles.containerButtons}
                    >
                        <Pressable
                            style={styles.btnCreateUser}
                            onPress={handlerNewUser}
                        >
                            <Text 
                                style={styles.btnTextCreateUser}
                            >Create user</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 20,
    },
    exit_window: {
        marginVertical: 10,
        marginHorizontal: 30,
        backgroundColor: '#92b5be',
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
    containerGender: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
    },
    containerGenderRadioButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    formTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textSubtitle: {
        color: '#92b5be',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textBox: {
        borderColor: '#92b5be',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    btnCreateUser: {
        backgroundColor: '#92b5be',
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        width: 120,
    },
    btnTextCreateUser: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    datePicker: {
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#92b5be',
        borderWidth: 1,
        borderRadius: 10,
    },
});