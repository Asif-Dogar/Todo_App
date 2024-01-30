import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import InputHandler from './Components/InputHandler';
import TodoListHandler from './Components/TodoList';
import { useState } from 'react';

export default function App() {
  const [valueinArray, setValueinArray] = useState([]);
  const [isAmode, setisAmode] = useState(false);

  const valuesetter = (inputContValaue) => {
    if (inputContValaue == 0) {
      return;
    }
    setValueinArray((currentValue) => [...currentValue, { id: Math.random().toString(), value: inputContValaue }])
    setisAmode(false);
  }

  const removeTodo = (getId) => {
    setValueinArray((currentValue) => {
      return currentValue.filter((todo) => todo.id != getId)
    });
  }

  const cancelToAddTodo = () => {
    setisAmode(false)
  }


  return (
    <View style={styles.container}>
      <View style={styles.mainButton}>
        <Button title='Click to Add Todo-List' onPress={() => setisAmode(true)} />
      </View>
      <InputHandler onPressProps={valuesetter} modelvisibilty={isAmode} onCancelTodo={cancelToAddTodo} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={valueinArray}
        renderItem={(itemData) => (<TodoListHandler id={itemData.item.id} itemList={itemData.item.value} onDelete={removeTodo} />)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,


  },
  mainButton: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,

  }
});
