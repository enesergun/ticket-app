import { Text, View } from "react-native";
import React, { Component } from "react";
import { styles } from "../style/components/sectionComponentStyle";

const SectionComponent = ({ title, viewAll, children }) => {
  return (
    <View>
      <View style={styles.SectionComponent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.viewAll}>{viewAll}</Text>
      </View>
      {children}
    </View>
  );
};

export default SectionComponent;
