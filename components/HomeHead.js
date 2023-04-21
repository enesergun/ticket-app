import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Notifications from "../constants/icons/NotificationsIcon";

import { styles } from "../style/components/HomeHeadStyle";

const HomeHead = ({navigation}) => {
  return (
    <View style={styles.head}>
      <View style={styles.profileSection}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("Profile")}
        ></TouchableOpacity>
        <View style={styles.textSection}>
          <Text style={styles.welcomeText}>Good Morning!</Text>
          <Text style={styles.userName}>Kretya</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notifications}>
        <Notifications color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHead;
