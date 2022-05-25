import React, { Component } from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { db, auth } from "../firebase/config";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator()

class StackNavigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false,
            loginError: '',
            registerError: '',
        }
    }

    componentDidMount(){
        // if(auth.currentUser) {
        //     this.setState({loggedIn: true})
        // }
        auth.onAuthStateChanged( user => {
           this.setState({loggedIn: user})
        })
    }

    register(email, pass, username){
        auth.createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({loggedIn: true}, ()=> console.log(this.state.registered));
                db.collection('users').add({
                    owner: email,
                    username: username,
                    createdAt: Date.now()
                })
                .then(response => {console.log('el response es' + response)})
                .catch(e => console.log(e))
            })
            .catch(error => {
                let message = error.message
                console.log(message)
                this.setState({registerError: message})
            })
    }

    login(email, pass){
        auth.signInWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({loggedIn: true}, () => console.log(this.state.loggedIn));
            })
            .catch(error => {
                let message = error.message
                console.log(message)
                this.setState({loginError: message})
            })
    }

    logout(){
        auth.signOut()
            .then(response => this.setState({loggedIn: false}))
            .catch(e => console.log(e))
    }



    render(){
        console.log('se rendenderiza STACK')
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
                            // component={ Login }
                            children={(props) => <Login login={(mail, pass) => this.login(mail, pass)} loginError={this.state.loginError} {...props} />}
                            // initialParams={ { login: (mail, pass) => this.login(mail, pass), loginError: this.state.loginError } }
                        />
                        <Stack.Screen
                            name='register'
                            // component={ Register }
                            children={(props) => <Register register={(mail, pass) => this.register(mail, pass)} registerError={this.state.registerError} {...props} />}
                            // initialParams={ { register: (mail, pass, username) => this.register(mail, pass, username), registerError: this.state.registerError } }
                        />
                    </Stack.Group>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }   

}

export default StackNavigation;