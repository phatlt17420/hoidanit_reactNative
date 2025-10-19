
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);


  return (
    <View style={styles.container}>
      <View>
        <Text>Name: {name}</Text>
        <TextInput
          multiline
          style={{
            borderColor: 'green',
            borderWidth: 2,
            width: 200,
            padding: 15
          }}
          onChangeText={(value) => { setName(value) }}
        ></TextInput>
      </View>
      <View>
        <Text>Age: {age}</Text>
        <TextInput
          multiline
          style={{
            borderColor: 'green',
            borderWidth: 2,
            width: 200,
            padding: 15
          }}
          onChangeText={(value) => { setAge(+value) }}
          keyboardType='numeric'
          maxLength={2}
        ></TextInput>
      </View>
      <Text style={styles.hello1}>Count = {count}</Text>
      <View>
        <Button
          title='Increase' onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}


// css in js// không có khái niệm CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1:
  {
    color: "red",
    fontSize: 40,
    borderColor: "green",
    borderWidth: 5,
    padding: 10
  }

});
