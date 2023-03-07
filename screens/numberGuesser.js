import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';


const NumberGuesser = () => {
    let [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState(null);
    const [message, setMessage] = useState('');



    // Check the guess
    const checkGuess = () => {
        if (guess == answer) {
            setMessage('You win!');
            setAnswer((Math.floor(Math.random() * 100) + 1));
        } else if (guess > answer) {
            setMessage('Your guess is too high');
        } else if (guess < answer) {
            setMessage("Your guess is too small");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Number Guesser 1-100</Text>
            <TextInput
                style={styles.input}
                onChangeText={setGuess}
                placeholder="Enter a number..."
                keyboardType="numeric"
            />
            <Button onPress={checkGuess} title="Guess" />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    input: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        textAlign: 'center',
    },
    message: {
        marginTop: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 65,
        height: 40
    },
    buttonText: {
        fontWeight: "bold",
    }
});

export default NumberGuesser;