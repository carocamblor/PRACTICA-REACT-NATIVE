import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

function NewPostForm (props) {
    return(
        <View>
            <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Escribi lo que sea'
                onChangeText={ text => props.changeState(text)}
                value={props.text}
                />
            <TouchableOpacity style={styles.button} onPress={() => props.onSubmit()}>
                <Text>Postear</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745'
    }
})

export default NewPostForm;