import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const TodoListHandler = (props) => {


    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.todoList}>
                <Text>{props.itemList}</Text>
            </View>
        </TouchableOpacity>
    );


}
const styles = StyleSheet.create({
    todoList: {
        borderWidth: 2,
        padding: 10,
        margin: 5,
        marginVertical: 8

    }

})
export default TodoListHandler;