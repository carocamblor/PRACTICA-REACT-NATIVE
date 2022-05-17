import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CommentContainer from './CommentContainer';
import { auth } from '../firebase/config';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            error: ''
        }
    }

    onSubmit(){
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='email-adress'
                    placeholder='Email'
                    onChangeText={ text => this.setState({email:text})}/>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Username'
                    onChangeText={ text => this.setState({username:text})}/>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={ text => this.setState({password:text})}/>
                <TouchableOpacity style={styles.button} onPress={() => this.props.register(this.state.email, this.state.password)}>
                    <Text>Registrate</Text>
                </TouchableOpacity>
                <View>
                    {this.props.registerError ? <Text>EL ERROR ES: {this.props.registerError}</Text> : <Text>NO HAY ERROR</Text>}
                </View>
                <View>
                    <Text>Datos ingresados:</Text>
                    <Text>Email: {this.state.email}</Text>
                    <Text>Usuario: {this.state.username}</Text>
                    <Text>Contraseña: {this.state.password}</Text>
                </View>
                <CommentContainer/>
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

export default Home;