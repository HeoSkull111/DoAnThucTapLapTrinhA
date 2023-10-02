import React, {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MayTinh = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    //Cộng 2 số
    const Cong = () => {
        setResult(parseInt(number1) + parseInt(number2));
    }
    //Trừ 2 số
    const Tru = () => {
        setResult(parseInt(number1) - parseInt(number2));
    }
    //Nhân 2 số
    const Nhan = () => {
        setResult(parseInt(number1) * parseInt(number2));
    }
    //Chia 2 số
    const Chia = () => {
        setResult(parseInt(number1) / parseInt(number2));
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, color: 'red'}}>Máy Tính Cộng Đơn Giản Nhất</Text>

            <Text style={styles.TextInput}>
                Nhập số thứ nhất
            </Text>
            <TextInput style ={styles.border} onChangeText={(number1) => setNumber1(number1)}/>
            <Text style={styles.TextInput}>
                Nhập số thứ hai
            </Text>
            <TextInput style ={styles.border} onChangeText={(number2) => setNumber2(number2)}/>

            <TouchableOpacity style={styles.button} onPress={Cong}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={Tru}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={Nhan} >
                <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={Chia}>
            <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 30, color: 'red'}}>{result}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        padding: 5
    },
    border: {
        borderWidth: 1,
        width: 400,
        height: 30,
        margin:10,
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        width: 400,
        margin: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    }
});
export default MayTinh;