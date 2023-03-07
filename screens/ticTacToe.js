import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';




const TicTacToe = () => {

    const [board, setBoard] = useState([['', '', ''],
    ['', '', ''],
    ['', '', '']
    ]);
    const [currentPlayer, setCurrentPlayer] = useState('X');

    const handlePress = (row, col) => {
        // don't allow moves on a filled square
        if (board[row][col] !== '') {
            return;
        }

        // make the move
        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        // check for a win
        const winningCombinations = [[[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (
                board[a[0]][a[1]] === currentPlayer &&
                board[b[0]][b[1]] === currentPlayer &&
                board[c[0]][c[1]] === currentPlayer
            ) {
                alert(`Player ${currentPlayer} wins!`);
                setBoard([['', '', ''],
                ['', '', ''],
                ['', '', '']
                ]);
                return;
            }
        }

        // check for a draw
        let isDraw = true;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === '') {
                    isDraw = false;
                    break;
                }
            }
        }
        if (isDraw) {
            alert('It\'s a draw!');
            setBoard([['', '', ''],
            ['', '', ''],
            ['', '', '']
            ]);
            return;
        }

        // switch players
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    return (

        <View>
            <Text style={styles.header}>TicTacToe</Text>
            <View style={styles.container}>

                {board.map((rows, rowIndex) =>
                    rows.map((_, colIndex) => (
                        <TouchableOpacity
                            key={`${rowIndex}-${colIndex}`}
                            style={styles.square}
                            onPress={() => handlePress(rowIndex, colIndex)}
                        >
                            <Text style={styles.text}>{board[rowIndex][colIndex]}</Text>
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 100
    },
    square: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000'
    },
    text: {
        fontSize: 60
    },
    header: {
        textAlign: 'center',
        marginTop: 150,
        fontWeight: 'bold',
        fontSize: 40
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

export default TicTacToe;

