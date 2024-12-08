import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
    
      <View style={styles.container}>
        <Text
          style={{
            backgroundColor: "red",
            width: "500px",
            flex: 1,
            fontSize: 50,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          hello body
        </Text>

        <Text
          style={{
            backgroundColor: "red",
            width: "500px",
            fontSize: 50,
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          hello body
        </Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
