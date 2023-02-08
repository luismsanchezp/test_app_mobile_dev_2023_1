import React, { useState } from 'react'
import { 
    Modal,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Pressable
} from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { RadioButton } from 'react-native-paper';

export const Form = ({modalVisibleForm}) => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [userGender, setUserGender] = useState('');

    console.log('userName: ', userName);
    console.log('userSurname: ', userSurname);
    console.log('userEmail: ', userEmail);
    console.log('dateBirth: ', dateBirth);
    console.log('userGender: ', userGender);

    return (
        <Modal animationType='slide' visible={modalVisibleForm}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text 
                        style={styles.formTitle}
                    >Form</Text>
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
                    <View style={styles.containerGender}>
                        <Text
                            style={styles.textTitle}
                        >Gender</Text>
                        <View style={styles.containerGenderRadioButtons}>
                            <RadioButton
                                color='#92b5be'
                                value="F"
                                status={ userGender === 'F' ? 'checked' : 'unchecked' }
                                onPress={() => setUserGender('F')}
                            />
                            <Text>Female</Text>
                        </View>
                        <View style={styles.containerGenderRadioButtons}>
                            <RadioButton
                                color='#92b5be'
                                value="M"
                                status={ userGender === 'M' ? 'checked' : 'unchecked' }
                                onPress={() => setUserGender('M')}
                            />
                            <Text>Male</Text>
                        </View>
                    </View>
                    <Text
                        style={styles.textTitle}
                    >Birth Date</Text>
                    <DatePicker
                        options={styles.datePicker}
                        minimumDate='1900/01/01'
                        mode='calendar'
                        onSelectedChange={date => setDateBirth(date)}
                    />
                    <Text style={styles.textTitle}
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
                    <View style={styles.containerButtons}>
                        <Pressable
                            style={styles.btnStyle2}>
                            <Text style={styles.btnTxtStyle}>Aceptar</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnStyle2}>
                            <Text style={styles.btnTxtStyle}>Cancelar</Text>
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
    textBox: {
        borderColor: '#92b5be',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    btnStyle2: {
        backgroundColor: '#92b5be',
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        width: 120,
    },
    btnTxtStyle: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    datePicker: {
        selectedTextColor: '#fff',
        mainColor: '#92b5be',
    },
});