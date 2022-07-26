import { View, Image, Text } from "react-native";

export default function ItemCard(props) {
  return (
    <View>
      <Image source={props.imgSrc}></Image>
    </View>
  );
}
