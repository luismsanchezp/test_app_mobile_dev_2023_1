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

export const Form = ({modalVisibleForm, setModalVisibleForm, usersList, setUsersList}) => {
    
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [dateBirth, setDateBirth] = useState(new Date());
    const [userGender, setUserGender] = useState('');

    const handlerNewUser = () => {
        if([userName, userSurname, userEmail, dateBirth, userGender].includes('')){
            console.debug('Error: Empty fields');
            Alert.alert(
                'Error',
                'Empty fields',
                [
                    {
                        text: 'Accept',
                        onPress: () => console.debug('OK Pressed'),
                    },
                ]);
            return;
        } else {
            const new_user = {
                id: userId,
                name: userName,
                surname: userSurname,
                email: userEmail,
                birthDate: dateBirth,
                gender: userGender
            };
            gotcha = usersList.find(x => x.email == userEmail);
            if (gotcha === undefined) {
                console.debug("User not found. Creating new user...");
                new_user.id = 'no-id'
                usersList.push(new_user);
            } else {
                setUsersList(usersList.map(x => x.email == userEmail ? new_user : x))
            }
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
                        onChangeText={(text) => {
                            setUserName(text);
                            console.debug('Name: ' + text);
                        }}
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
                        onChangeText={(text) => {
                            setUserSurname(text);
                            console.debug('Surname: ' + text);
                        }}
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
                                onPress={() => {
                                    setUserGender('F');
                                    console.debug('Gender: ', userGender);
                                }}
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
                                onPress={() => {
                                    setUserGender('M');
                                    console.debug('Gender: ', userGender);
                                }}
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
                            onDateChange={(date) => {
                                    setDateBirth(date);
                                    console.debug('Birth Date: ' + date);
                                }
                            }
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
                        onChangeText={
                            (text) => {
                                setUserEmail(text);
                                console.debug('Email: ' + text);
                            }
                        }
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