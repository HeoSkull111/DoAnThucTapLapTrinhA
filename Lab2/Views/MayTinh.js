import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MayTinh  = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    //Cộng 2 số
    const Cong = () => {
        setResult(parseInt(number1) + parseInt(number2));
    }
    return (
        <View style={styles.center}>
            <Text style={{fontSize: 30, color: 'red'}}>Máy Tính Cộng Đơn Giản</Text>
            <Text style={styles.TextInput}>
                Nhập số thứ nhất
            </Text>
            <TextInput style ={styles.border} onChangeText={(number1) => setNumber1(number1)}/>
            
            <Text style={styles.TextInput}>
                Nhập số thứ hai
            </Text>
            <TextInput style ={styles.border} onChangeText={(number2) => setNumber2(number2)}/>
            <Button
                title="Kết quả"
                onPress={Cong}
            />
            <Text style={{fontSize: 30, color: 'red'}}>{result}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    TextInput: {
        width: 200, 
        height: 40, 
        fontSize: 20, 
        marginTop: 20,
        flexWrap: "nowrap"
    },
    border: {
        borderWidth: 1,
        width: 200,
        height:30,
    },
    center: {
        flex:1 ,
        alignContent:"center",
        justifyContent:"center"
    }
});
export default MayTinh;
