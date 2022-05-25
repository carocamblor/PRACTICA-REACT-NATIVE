import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            likes: 0,
            liked: false
        }
    }

    render(){
    return(
        <View>
            <TouchableOpacity>
                <Text>{this.props.data.text}</Text>
                <Text>{this.props.data.owner}</Text>
                <TouchableOpacity>
                    <Text>Me gusta</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Quitar like</Text>
                </TouchableOpacity>
                <Text>Likes: {this.state.likes}</Text>
            </TouchableOpacity>
        </View>
    )}
}

const styles = StyleSheet.create({
    card: {

    },
    image: {
        height: 100,
        width: 100
    }
})

export default Post;