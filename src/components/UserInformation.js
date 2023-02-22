import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';

export const UserInformation = ({user, setUser, setModalUser}) => {
    return (
        <SafeAreaView style={styles.content}>
            <Text style={styles.title}>
                Informacion {'\n'}
                <Text style={styles.title_bold}>del usuario</Text>
            </Text>
            <View>
                <Pressable
                    style={styles.btnClose}
                    onLongPress={() => {
                        setModalUser(false);
                        setUser({});
                    }}>
                    <Text style={styles.btn_close_text}>Cerrar</Text>
                </Pressable>
            </View>
            <View style={styles.content2}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Name: </Text>
                    <Text style={styles.value}>{user.name}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Surname: </Text>
                    <Text style={styles.value}>{user.surname}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.value}>{user.email}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Birth Date: </Text>
                    <Text style={styles.value}>{user.birthDate}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Gender: </Text>
                    <Text style={styles.value}>{user.gender}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#F59E0B',
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff',
    },
    title_bold: {
        fontWeight: '900',
    },
    btn_close_text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    btnClose: {
        marginVertical: 30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    content2: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadownOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12,
    },
    value: {
        fontWeight: '700',
        fontSize: 20,
        color: '#374155',
    },
});