import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyAppHeaderText from "./components/MyAppHeaderText";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topTitle}>
        <MyAppHeaderText textCol="#ffd369">GEX Search</MyAppHeaderText>
      </View>
      <View style={styles.secondTitle}>
        <MyAppHeaderText textCol="#EEEEEE">
          Search For Items in the Grand Exchange
        </MyAppHeaderText>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111114",
    alignItems: "center",
    justifyContent: "center",
  },
  topTitle: {
    flex: 2,
    padding: 30,
  },
  secondTitle: {
    flex: 3,
  },
  title: {},
});
