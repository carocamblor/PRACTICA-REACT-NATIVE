import React, { Component } from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { auth } from '../firebase/config';

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        console.log(auth.currentUser)
    return (
            <View>
                <Text>Tu perfil</Text>
                <Text>Email:</Text>
                <Text>{auth.currentUser.email}</Text>
                <Text>Fecha de alta:</Text>
                <Text>{auth.currentUser.metadata.creationTime}</Text>
                <Text>Último inicio de sesión:</Text>
                <Text>{auth.currentUser.metadata.lastSignInTime}</Text>
                <TouchableOpacity onPress={() => this.props.route.params.logout()}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

export default Profile;