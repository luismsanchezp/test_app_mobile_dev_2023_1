import React, { useState } from 'react'
import { 
    Modal,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View
} from 'react-native'
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';

export const Form = ({modalVisibleForm}) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [dateBirth, setDateBirth] = useState(new Date());
    const [userAge, setUserAge] = useState(0);

    const fillRange = (start, end) => {
        return Array(end - start + 1).fill().map((item, index) => start + index);
    };

    const ages = fillRange(13, 100);
    const renderAgeList = () => {
        return ages.map((ageNum) => {
            return <Picker.Item label={ageNum.toString()} value={ageNum} />
        })
    }
    
    console.log('userName: ', userName);
    console.log('userEmail: ', userEmail);
    console.log('dateBirth: ', dateBirth);
    console.log('userAge: ', userAge);

    return (
        <Modal animationType='slide' visible={modalVisibleForm}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text style={styles.formTitle}>Form</Text>
                    <View>
                        <Text
                            style={styles.textTitle}
                        >Name</Text>
                        <TextInput
                            placeholder='Your Name'
                            placeholderTextColor={'#203474'}
                            autoCapitalize='words'
                            autoCorrect={false}
                            value={userName}
                            onChangeText={setUserName}
                            style={styles.textBox}
                        ></TextInput>
                        <Text
                            style={styles.textTitle}
                        >Email</Text>
                        <TextInput
                            placeholder='name@email.com'
                            placeholderTextColor={'#203474'}
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoCompleteType='email'
                            value={userEmail}
                            onChangeText={setUserEmail}
                            style={styles.textBox}
                        ></TextInput>
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
                        <Text
                            style={styles.textTitle}
                        >Age</Text>
                        <Picker
                        selectedValue={userAge}
                        onValueChange={(itemValue, itemIndex) =>
                            setUserAge(itemValue)
                        }
                        >
                            {renderAgeList()}
                        </Picker>
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
});
