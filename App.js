import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import MyAppHeaderText from "./components/MyAppHeaderText";
import ItemSearch from "./components/ItemSearch";

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
      <Text style={styles.mainText}>
        {`Searches may be separated
        by commas. e.g. "Cod, Salmon, Bronze Spear". Click an item to view price
        history information. Favourite with the ★ button.`}
      </Text>
      <ItemSearch />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111114",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topTitle: {
    padding: 30,
  },
  secondTitle: {
    width: 350,
  },
  mainText: {
    color: "#6d7578",
    textAlign: "center",
    fontSize: 15,
    width: 400,
    marginTop: 20,
    fontWeight: "bold",
  },

});
