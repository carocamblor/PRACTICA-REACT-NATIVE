import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

function Card (props) {
    return(
        <View>
            <TouchableOpacity>
                <Image
                    style={styles.image}
                    source={{uri: props.data.image}}
                    resizeMode='contain'
                />
                <Text>{props.data.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {

    },
    image: {
        height: 100,
        width: 100
    }
})

export default Card;