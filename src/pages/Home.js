import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import biscoitoFechado from '../../assets/biscoito.png';
import biscoitoAberto from '../../assets/biscoitoAberto.png';

export const Home = () => {
    const [img, setImg] = useState(biscoitoFechado);
    const [msg, setMsg] = useState('');
    let frases = [
        'Siga os bons e aprenda com eles',
        'O bom-senso vale mais do que muito conhecimento',
        'O riso é a menor distancia entre duas pessoas',
        'deixe de lado  as preocupações e seja feliz',
        'Realize o obvio, pense no improvavel e conquiste o impossivel',
        'Acredite em milagres, mas não dependa deles',
        'A maior barreira para o sucesso é o medo do fracasso'
    ];

    const quebrar = () => {
        setImg(biscoitoAberto);
        frases.forEach((frase, index) => {
            let indexAleatorio = Math.floor(Math.random() * index);
            setMsg(`"${frases[indexAleatorio]}"`)
        })
    }
    const reiniciar = () => {
        setImg(biscoitoFechado);
        setMsg('');
    }
    return (
        <>
            <Image
                source={img}
                style={styles.image}
            />
            <Text style={styles.text}>{msg}</Text>
            <TouchableOpacity style={styles.button} onPress={quebrar}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnText}>Quebrar biscoito</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { borderColor: '#121212' }]} onPress={reiniciar}>
                <View style={styles.btnArea}>
                    <Text style={[styles.btnText, { color: '#121212' }]}>Reiniciar biscoito</Text>
                </View>
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    },
    button: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    btnArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#dd7b22',
        fontSize: 17,
        fontWeight: 'bold'
    },
    text: {
        color: '#dd7b22',
        fontStyle: 'italic',
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    },
})