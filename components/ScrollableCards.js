import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

import { styles } from "../style/components/scrollableCardsStyle";

const Item = ({ title, type }) => (
  <View style={[styles.item, styles[type]]}>
    <Image style={styles.tinyLogo} source={require("../assets/ongoing.png")} />
  </View>
);

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "3ac18afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58494a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const ScrollableCards = ({ navigation, type }) => {
  return (
    <View style={styles.scrollableCards}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} type={type} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ScrollableCards;
