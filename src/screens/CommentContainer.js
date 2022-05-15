import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CommentForm from '../components/CommentForm';

class CommentContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            comment: '',
        }
    }

    changeState(text){
        this.setState({
            comment: text
        })
    }

    onSubmit(){
        console.log(this.state)
    }

    render() {
        return (
            <View>
                <CommentForm changeState={(text) => this.changeState(text)} onSubmit={() => this.onSubmit()} comment={this.state.comment}/>
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

export default CommentContainer;