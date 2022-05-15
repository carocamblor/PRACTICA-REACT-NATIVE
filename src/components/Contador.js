import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Contador (props) {
    return(
        <View style={styles.contador}>
            <Text>Cantidad de clicks: {props.num}</Text>
            <TouchableOpacity onPress={() => props.sumar()}>
                <Text style={styles.contadorClick}>Click aquí para contar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contador: {
        marginTop: 5,
    },
    contadorClick: {
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        // marginBottom: 10,
        borderRadius: 4,
    },
})

export default Contador;