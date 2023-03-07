import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';




const Home = () => {
    const navigation = useNavigation();

    const goToNumberguesser = () => {
        navigation.navigate("NumberGuesser")
    }

    const gotoRockPaperScissors = () => {
        navigation.navigate("RockPaperScissors")
    }

    const goToTicTacToe = () => {
        navigation.navigate("TicTacToe")
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Home</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={gotoRockPaperScissors} style={[styles.button, styles.button]}>
                    <Text style={styles.buttonText}>Rock Paper Scissors</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNumberguesser} style={styles.button}>
                    <Text style={styles.buttonText}>NumberGuesser</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToTicTacToe} style={[styles.button, styles.button]}>
                    <Text style={styles.buttonText}>TicTacToe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40
    },
})