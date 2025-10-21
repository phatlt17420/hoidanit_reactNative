
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 20 }}>Hello World</Text>



    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange"
  },
  container: {

    flex: 1,
    backgroundColor: '#fff'
  },
});
