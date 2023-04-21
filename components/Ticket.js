import { Text, View } from "react-native";
import React, { Component } from "react";
import { styles } from "../style/components/ticketStyle";
import Icons from "../constants/icons/icons";

const Ticket = ({ title, viewAll, children, alignRight }) => {
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
        <View
          style={[
            {
              transform: [{ rotate: "90deg" }],
            },
          ]}
        >
          <Icons name={"FlightIcon"} color={"#FA8D35"} />
        </View>
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
