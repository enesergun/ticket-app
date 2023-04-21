import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icons from "../constants/icons/icons";
import { styles } from "../style/components/SearchFlight";

const SelectRoute = ({ navigation, iconName, title, route, type }) => {
  return (
    <View style={styles.selectContainer}>
      <View style={styles.selectSection}>
        <Icons name={iconName} color={"#C2C2C2"} size={30} />
        <View style={styles.selectWrapper}>
          <Text style={styles.selectTitle}>{title}</Text>
          <TouchableOpacity
            style={styles.selectName}
            onPress={() => navigation.navigate(type)}
          >
            <Text>{route}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectRoute;
