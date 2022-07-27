import { View, Image, Text, StyleSheet } from "react-native";

export default function ItemCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{props.title}</Text>
      <Image
        style={styles.itemImage}
        source={{ uri: props.imgSrc }}
        accessibilityLabel={props.accessLabel}
      ></Image>
      <Text style={styles.itemText}>ID: {props.itemID}</Text>
      <Text style={styles.itemText}>Price: {props.itemPrice}</Text>
      <Text style={styles.itemText}>As of: {props.timeStamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    width: 300,
    height: null,
    backgroundColor: "#1c1c1c",
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
