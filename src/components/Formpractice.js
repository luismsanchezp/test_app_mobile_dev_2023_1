import React, {useState} from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TextInput,
    Pressable,
    Alert,
    SafeAreaView,
} from "react-native";

export const Formpractice = ({formPracticeVisible, setFormPracticeVisible}) => {

    const [value, setValue] = useState("Name");

    const capturarValor = (value) => {
        console.log(value);
    }

    return (
        <SafeAreaView>
            <Modal visible={formPracticeVisible} animationType="slide">
                <View style={styles.content}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Form Practice</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text_input_title}>Name</Text>
                        <TextInput 
                            style={styles.text_font}
                            editable
                            placeholder={value}
                            placeholderTextColor="lightgray"
                            onChangeText={capturarValor}/>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text_input_title}>Text Box 2</Text>
                        <TextInput 
                            style={styles.text_font}
                            editable
                            multiline/>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#0069A3',
        flex: 1,
    },
    container: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    text_input_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    text_font: {
        color: 'white',
        fontFamily: 'Fira Sans',
    },
});
