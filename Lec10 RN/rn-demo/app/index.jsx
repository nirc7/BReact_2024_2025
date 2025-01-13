import { useState } from "react";
import { Button, Image, Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Button as BTNEl, Icon } from '@rneui/themed';

export default function Index() {
  const [text, onChangeText] = useState('Useless Text');
  const [count, setCount] = useState(0);

  const btnPlus = () => {
    setCount(7);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BTNEl onPress={() => setCount(777)} radius={"sm"} type="outline">
        Save
        <Icon name="save" color="red" />
      </BTNEl>

      <TextInput
        style={styles.input}
        onChangeText={(t)=>onChangeText(t)}
      />
      <Text>text= {text}</Text>

      <Text>nir</Text>
      <Button title="Plus" onPress={btnPlus} />
      <View>
        <Text style={{ fontSize: 20, color: 'red' }}>count={count}</Text>
      </View>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg'
        }}
        style={{ width: 150, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />

      <TouchableOpacity onPress={() => setCount(77)}>
        <Text style={{ backgroundColor: 'lightgrey', padding: 10, margin: 20, borderRadius: 5 }}>click me!</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.h1}>h1</Text>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    padding: 24,
    backgroundColor: '#eaff00',
  },
  h1: {
    fontSize: 20
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});