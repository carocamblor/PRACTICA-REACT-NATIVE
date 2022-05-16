import React, { Component } from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../firebase/config";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator()

class StackNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false,
            loginError: '',
            registerError: ''
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged( user => {
           this.setState({loggedIn: user})
        })
    }

    register(email, pass){
        auth.createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({loggedIn: true}, ()=> console.log(this.state.registered));
            })
            .catch(error => {
                console.log(error)
                this.setState({registerError: error})
            })
    }

    login(email, pass){
        auth.signInWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({loggedIn: true}, () => console.log(this.state.loggedIn));
            })
            .catch(error => {
                console.log(error)
                this.setState({loginError: error})
            })
    }

    logout(){
        auth.signOut()
            .then(response => this.setState({loggedIn: false}))
            .catch(e => console.log(e))
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    {this.state.loggedIn ?
                    <Stack.Group>
                        <Stack.Screen
                        name='TabNavigation'
                        component={ TabNavigation }
                        initialParams={ { logout: () => this.logout() } }
                        />
                    </Stack.Group> :
                    <Stack.Group>
                        <Stack.Screen
                            name='login'
                            component={ Login }
                            initialParams={ { login: (mail, pass) => this.login(mail, pass), loginError: this.state.loginError } }
                        />
                        <Stack.Screen
                            name='register'
                            component={ Register }
                            initialParams={ { register: (mail, pass) => this.register(mail, pass), registerError: this.state.registerError } }
                        />
                    </Stack.Group>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }   

}

export default StackNavigation;