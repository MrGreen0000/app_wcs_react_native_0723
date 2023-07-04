import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.bluetext}>Hello, world!</Text>
      <Text style={styles.bluetext}>Hello, world!</Text>
      <Text style={styles.bluetext}>Hello, world!</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  bluetext: {
    fontSize: 25,
    color: "blue",
  },
});
