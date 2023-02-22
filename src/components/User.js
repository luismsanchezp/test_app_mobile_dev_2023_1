import React from 'react';
import { 
    Pressable,
    View,
    Text,
    StyleSheet
} from 'react-native';

export const User = ({
    user_item,
    setModalVisible,
    setUser,
    userEdit,
    userDelete,
    setModalUser,
}) => {
    const {userId, userName, userSurname, userEmail, userBirthDate, userGender} = user_item;
    return (
        <Pressable
            onLongPress={() => {
                setModalUser(true);
                setUser(user_item);
            }}>
            <View style={styles.content}>
                <Text style={styles.label}>Usuario: </Text>
                <Text>{userId}</Text>
                <Text>{userName}</Text>
                <Text>{userSurname}</Text>
                <Text>{userEmail}</Text>
                <Text>{userBirthDate}</Text>
                <Text>{userGender}</Text>
                <View>
                    <Pressable
                        style={[styles.btn, styles.btnEdit]}
                        onLongPress={() => {
                            setModalVisible(true);
                            userEdit(id);
                        }}>
                        <Text style={styles.btnText}>Editar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.btn, styles.btnDelete]}
                        onLongPress={() => { userDelete(id) }}>
                        <Text style={styles.btnText}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomColor: '#94a3B8',
        borderBottomWidth: 1,
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10,
    },
    text: {
        color: '#6D28D9',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
    },
    date_b: {
        color: '#374151',
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnEdit: {
        backgroundColor: '#F59E0B',
    },
    btnDelete: {
        backgroundColor: '#EF4444',
    },
    btnText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#fff',
        fontSize: 12,
    },
});
