import {
  splitThenURL,
  makeSingleUrl,
  checkValidImages,
  formatItemUrls,
} from "../lib/ItemSearchFunctions";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

import { useState } from "react";
import ItemCard from "./ItemCard";

export default function ItemSearch() {
  const [itemList, setItemList] = useState([]);
  const [validItemText, setValidItemText] = useState("");
  const [searchVal, setSearchVal] = useState("");

  function populateList(inputListName) {
    const urlList = formatItemUrls(inputListName);
    let inputList = splitThenURL(inputListName);
    checkValidImages(inputList).then((url) => {
      setValidItemText("");
      fetch(urlList, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "GEX Application Dev",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success !== false) {
            setValidItemText("");
            Object.keys(data).forEach((key) => {
              if (!itemList.find((e) => e.itemID === data[key].id)) {
                setItemList((prevValues) => {
                  return [
                    ...prevValues,
                    {
                      imageUrl: makeSingleUrl(key),
                      name: key,
                      itemID: data[key].id,
                      price: data[key].price.toLocaleString("en-US"),
                      timeStamp: data[key].timestamp.substring(0, 10),
                    },
                  ];
                });
              }
            });
          } else if (data.success === false) {
            setValidItemText("Please enter a valid search.");
          }
        });
    });
  }

  const submitHandler = () => {
    populateList(searchVal);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearchVal(text)}
        value={searchVal}
        style={styles.searchBar}
        placeholder="Start typing and press submit to search for items..."
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            width: 100,
            height: 30,
            textAlign: "center",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
      <Text style={styles.validText}>{validItemText}</Text>
      <View style={styles.itemGrid}>
        {itemList.map((item) => (
          <ItemCard
            key={item.itemID}
            imgSrc={item.imageUrl}
            title={item.name}
            itemPrice={item.price}
            itemID={item.itemID}
            timeStamp={item.timeStamp}
            accessLabel={"Image of item named " + item.name}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#111114",
  },
  searchBar: {
    color: "#6d7578",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    fontWeight: "bold",
    borderRadius: 10,
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  validText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  itemGrid: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
});
