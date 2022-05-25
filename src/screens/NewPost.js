import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { db, auth } from "../firebase/config";

class NewPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: '',
        }
    }

    changeState(text){
        this.setState({
            text: text
        })
    }

    onSubmit(){
        db.collection('posts').add({
            owner: auth.currentUser.email,
            text: this.state.text,
            likes: [],
            comments: [],
            createdAt: Date.now()
        })
        .then(response => {
            console.log(response)
                if(response){
                    this.setState({text: ''})
                } else {
                    console.log('hubo un error ' + response)
                }
            })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Escribi lo que sea'
                    onChangeText={ text => this.changeState(text)}
                    value={this.state.text}
                    />
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.onSubmit()
                    this.props.navigation.navigate('Home')
                    }}>
                    <Text>Postear</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 20
    },
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

export default NewPost;