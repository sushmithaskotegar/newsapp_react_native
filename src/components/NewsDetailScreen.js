import React from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native";

const NewsDetailScreen = (props) => {
  
  return (
      <TouchableOpacity onPress={props.onViewDetail}>
    <View style={styles.product}>
      <Text>{props.description}</Text>
      {/* <Text>{props.name}</Text>
      <Text>{props.category}</Text>
      <Text>{props.language}</Text>
      <Text>{props.url}</Text> */}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
   borderColor:'gray',
  borderWidth:2,
    shadowRadius: 8,
    elevation: 5,
    
    backgroundColor: "white",
    height: 150,
    margin: 10,
    padding:20
  },
});

export default NewsDetailScreen;
