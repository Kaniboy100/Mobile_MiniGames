import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


const RockPaperScissors = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);


    // Generate a random choice for the computer

    const computerPlay = () => {

        const choices = ['rock', 'paper', 'scissors'];

        return choices[Math.floor(Math.random() * choices.length)];

    };
    // Determine the result of the game

    const play = (playerChoice) => {
        const computerChoice = computerPlay();
        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);
        if (playerChoice === computerChoice) {
            setResult('Draw');
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            setResult('You win!');
        } else {
            setResult('You lose');
        }
    };

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Rock Paper Scissors</Text>
            {result ? (
                <View style={styles.resultContainer}>
                    <Text style={styles.choice}>You chose: {playerChoice}</Text>
                    <Text style={styles.choice}>Computer chose: {computerChoice}</Text>
                    <Text style={styles.result}>{result}</Text>
                    <Button onPress={() => setResult(null)} title="Play again" />
                </View>

            ) : (
                <View style={styles.choiceContainer}>
                    <Button onPress={() => play('rock')} title="Rock" />
                    <Button onPress={() => play('paper')} title="Paper" />
                    <Button onPress={() => play('scissors')} title="Scissors" />
                </View>
            )}
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
    choiceContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resultContainer: {
        alignItems: 'center',
    },
    choice: {
        fontSize: 18,
        marginBottom: 10,
    },
    result: {
        fontSize: 24,
        marginBottom: 20,
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

export default RockPaperScissors;