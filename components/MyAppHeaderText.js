import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function MyAppHeaderText(props) {

    const styleText = function(col){
        return{
            fontSize: 40,
            color: col,
            fontWeight: "bold",
            textAlign: 'center',
        }
    }
    
  return <Text style={styleText(props.textCol)}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#ffd369",
    fontWeight: "bold",
  },
});
