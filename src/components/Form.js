import React, { useState } from 'react'
import { 
    Modal,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
} from 'react-native'
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';

export const Form = ({modalVisibleForm}) => {
    const [userName, setUserName] = useState('Your Name');
    const [userSurname, setUserSurname] = useState('Your Surname');
    const [userEmail, setUserEmail] = useState('name@email.com');
    const [dateBirth, setDateBirth] = useState(new Date());
    const [userGender, setUserGender] = useState('F');
    
    console.log('userName: ', userName);
    console.log('userSurname: ', userSurname);
    console.log('userEmail: ', userEmail);
    console.log('dateBirth: ', dateBirth);
    console.log('userGender: ', userGender);

    return (
        <Modal animationType='slide' visible={modalVisibleForm}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text style={styles.formTitle}>Form</Text>
                    <View>
                        <Text style={styles.textTitle}
                        >Name</Text>
                        <TextInput
                            placeholderTextColor={'#203474'}
                            autoCapitalize='words'
                            autoCorrect={false}
                            value={userName}
                            onChangeText={setUserName}
                            style={styles.textBox}
                        ></TextInput>
                        <Text style={styles.textTitle}
                        >Surname</Text>
                        <TextInput
                            placeholderTextColor={'#203474'}
                            autoCapitalize='words'
                            autoCorrect={false}
                            value={userSurname}
                            onChangeText={setUserSurname}
                            style={styles.textBox}
                        ></TextInput>
                        <View
                            style={styles.containerGender}
                        >
                            <Text
                                style={styles.textTitle}
                            >Gender</Text>
                            <RadioButton
                                value="Female"
                                status={ userGender === 'F' ? 'checked' : 'unchecked' }
                                onPress={() => setUserGender('F')}
                            />
                            <RadioButton
                                value="Male"
                                status={ userGender === 'M' ? 'checked' : 'unchecked' }
                                onPress={() => setUserGender('M')}
                            />
                        </View>
                        <Text
                            style={styles.textTitle}
                        >Birth Date</Text>
                        <DatePicker
                            date={dateBirth}
                            locale='en_US'
                            mode='date'
                            minimumDate={new Date(1900, 0, 1)}
                            maximumDate={new Date()}
                            onDateChange={setDateBirth}
                        />
                        <Text style={styles.textTitle}
                        >Email</Text>
                        <TextInput
                            placeholderTextColor={'#203474'}
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
                                style={styles.btnStyle2}>
                                <Text style={styles.btnTxtStyle}>Aceptar</Text>
                            </Pressable>
                            <Pressable
                                style={styles.btnStyle2}>
                                <Text style={styles.btnTxtStyle}>Cancelar</Text>
                            </Pressable>
                        </View>
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
    },
    containerGender: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textBox: {
        borderColor: '#203474',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    btnStyle2: {
        backgroundColor: '#EA4918',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 10,
    },
});
