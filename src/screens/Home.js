import React, { Component } from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import Contador from '../components/Contador';
import Card from '../components/Card';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            num: 0,
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => this.setState({
                data: data.results,
                loader: false
            }))
    }

    click() {
        console.log('me clickearon')
    }

    sumar() {
        let num = this.state.num + 1
        this.setState({
            num: num
        })
    }

    render() {
    return (
            <View style={styles.main}>
                <Text>Hola Mundo</Text>
                <Image
                    style={styles.image}
                    source={require('../../assets/red.jpg')}
                    resizeMode='contain'
                />
                <Image
                    style={styles.image}
                    source={{uri: 'https://lapaginamillonaria.com/__export/1633441863048/sites/lpm/img/2021/10/05/xlvarez_-_rojo_crop1633441784392.jpg_1693159006.jpg'}}
                    resizeMode='contain'
                />
                <TouchableOpacity style={styles.click} onPress={() => this.click()}>
                    <Text style={styles.clickText}>Click</Text>
                </TouchableOpacity>
                <Text>{this.textoClick}</Text>
                <Contador sumar={() => this.sumar()} num={this.state.num}/>
                {this.state.loader ?
                <ActivityIndicator size='large' color='blue' /> :
                <FlatList
                    data={this.state.data}
                    keyExtractor={ item => item.id.toString()}
                    renderItem={({item}) => <Card data={item} /> }
                    
                    />
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        textAlign: 'center',
        padding: 10
    },
    click: {
        padding: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 4,
    },
    clickText: {
        fontWeight: 700
    },
    image: {
        height: 100,
        width: 100
    }
})

export default Home;