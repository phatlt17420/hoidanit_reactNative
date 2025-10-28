
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Pressable, Alert, TouchableNativeFeedback, Keyboard } from 'react-native';
import Flexbox from './components/flex.box';

interface Itodo {
  id: number;
  name: string
}
export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<Itodo[]>([]);
  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const handerAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi Input Todo", "Todo Không được để trống",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'XÁc nhận',
            onPress: () => (console.log('Ok')),
            style: 'default'
          }
        ]
      )
    } else {
      setListTodo([...listTodo,
      { id: randomInt(2, 20000000), name: todo }
      ]);
      setTodo("");
    }



  }
  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter(item => item.id !== id);
    setListTodo(newTodos)
  }
  return (
    // <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     {/* header */}
    //     <Text style={styles.header}>ToDo App</Text>
    //     {/* form */}
    //     <View style={styles.body}>
    //       <TextInput
    //         value={todo}
    //         style={styles.toDoInput}
    //         onChangeText={(value) => setTodo(value)}
    //       />
    //       <Button title='Add toDo'
    //         onPress={handerAddTodo}
    //       />
    //     </View>
    //     {/* list toDo */}
    //     <View style={styles.body}>
    //       <FlatList
    //         data={listTodo}
    //         keyExtractor={item => item.id + ""}
    //         renderItem={({ item }) => {
    //           return (
    //             <Pressable
    //               style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    //               onPress={() => { deleteTodo(item.id) }}>
    //               <Text style={styles.todoItem}>{item.name}</Text>
    //             </Pressable>

    //           )
    //         }}


    //       />
    //       <Text> {JSON.stringify(listTodo)}</Text>
    //     </View>
    //   </View>
    // </TouchableNativeFeedback>
    <Flexbox />


  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 35,

  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff'
  },
  toDoInput: {
    borderBottomWidth: 2,
    padding: 5,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 30
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10
  }
});
