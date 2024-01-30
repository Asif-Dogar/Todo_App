import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import { useState } from "react";


const InputHandler = (props) => {
    const [enteredValue, setEnteredValue] = useState("");

    const valueHandler = (text) => {
        setEnteredValue(text);

    };

    const todoHandler = () => {
        props.onPressProps(enteredValue)
        setEnteredValue('');

    }
    return (
        <Modal visible={props.modelvisibilty} animationType="slide">
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={valueHandler} value={enteredValue} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Todo" onPress={todoHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color={'red'} onPress={props.onCancelTodo} />
                    </View>
                </View>

            </View>
        </Modal>

    );

}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer: {
        width: '80%',
        borderWidth: 2,
        padding: 8,
        margin: 10
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button: {
        width: '45%',
    }


});

export default InputHandler;