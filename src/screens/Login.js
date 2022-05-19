import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    onSubmit(){
        console.log(this.state)
    }

    componentDidMount(){
        console.log('componentdidmount' + this.props.route.params.loginError)

    }

    render() {
        console.log('se rendenderiza Login')
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Email'
                    onChangeText={ text => this.setState({email:text})}/>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={ text => this.setState({password:text})}/>
                <TouchableOpacity style={styles.button} onPress={() => this.props.route.params.login(this.state.email, this.state.password)}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <View>
                    {this.props.route.params.loginError ? <Text>EL ERROR ES: {this.props.route.params.loginError}</Text> : <Text>NO HAY ERROR</Text>}
                </View>
                <View>
                    <Text>¿Todavía no tenes una cuenta?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
                        <Text>Registrate acá</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Datos ingresados:</Text>
                    <Text>Email: {this.state.email}</Text>
                    <Text>Usuario: {this.state.username}</Text>
                    <Text>Contraseña: {this.state.password}</Text>
                </View>
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

export default Login;