import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
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
      <Text>nir</Text>
      <Button title="Plus" onPress={btnPlus} />
      <View>
        <Text style={{fontSize:20, color:'red'}}>count={count}</Text>
      </View>
    </View>
  );
}
