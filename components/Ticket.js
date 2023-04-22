import { Text, View, Animated } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { styles } from "../style/components/ticketStyle";
import Icons from "../constants/icons/icons";

const Ticket = ({ title, viewAll, children, alignRight }) => {
  const translation = useRef(new Animated.Value(50)).current;
  useEffect(() => {
   
    Animated.loop(
      Animated.timing(translation, {
        toValue: -50,
        duration: 5000,
        useNativeDriver: true,
      })
    ).start();
  }, []);
  return (
    <View style={styles.TicketContainer}>
      <View
        style={[styles.TicketInfoWrapper, alignRight && styles.TicketınfoRight]}
      >
        <Text style={styles.TicketProvince}>Istnabul</Text>
        <Text style={styles.TicketTime}>10:00</Text>
        <Text style={styles.TicketDay}>Dec 24 2022</Text>
      </View>
      <View style={styles.Trip}>
        <View style={styles.dashedDot} />
        <View style={styles.dot} />
        <Animated.View
          ref={translation}
          style={[
            {
              transform: [{ rotate: "90deg" }, { translateY: translation }],
              zIndex: 1,
            },
          ]}
        >
          <Icons name={"FlightIcon"} color={"#FA8D35"} />
        </Animated.View>
        <View style={styles.dot} />
      </View>
      <View style={[styles.TicketInfoWrapper, styles.TicketınfoRight]}>
        <Text style={styles.TicketProvince}>Istnabul</Text>
        <Text style={styles.TicketTime}>10:00</Text>
        <Text style={styles.TicketDay}>Dec 24 2022</Text>
      </View>
    </View>
  );
};

export default Ticket;
