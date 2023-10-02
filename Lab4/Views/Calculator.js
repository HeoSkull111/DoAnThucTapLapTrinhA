import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumberPress = (number) => {
    if (display === '0' || display === '-0') {
      setDisplay(number.toString());
      setCurrentNumber(number.toString());
    } else {
      setDisplay(display + number.toString());
      setCurrentNumber(currentNumber + number.toString());
    }
  };

  const handleOperatorPress = (newOperator) => {
    if (currentNumber !== '') {
      setDisplay(newOperator);
      setCurrentNumber('');
      setPreviousNumber(display);
      setOperator(newOperator);
    }
  };

  const handleEqualPress = () => {
    if (currentNumber !== '' && previousNumber !== '' && operator !== null) {
      const result = eval(`${previousNumber}${operator}${currentNumber}`);
      setDisplay(result.toString());
      setCurrentNumber(result.toString());
      setPreviousNumber('');
      setOperator(null);
    }
  };

  const handleClearPress = () => {
    setDisplay('0');
    setCurrentNumber('');
    setPreviousNumber('');
    setOperator(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleClearPress()}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('*')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.equalButton, { flex: 4 }]} onPress={() => handleEqualPress()}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#282c35',
      },
      display: {
        fontSize: 48,
        textAlign: 'right',
        padding: 10,
        backgroundColor: '#1a1a1a',
        color: 'white',
        marginBottom: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      button: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      operatorButton: {
        flex: 1,
        backgroundColor: '#ff9500',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      equalButton: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 24,
        color: 'white',
      },
    });

export default Calculator;