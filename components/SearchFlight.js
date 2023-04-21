import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icons from "../constants/icons/icons";

import { styles } from "../style/components/SearchFlight";

const DATA = [
  {
    id: "1",
    iconName: "FlightIcon",
    title: "Flight",
  },
  {
    id: "2",
    iconName: "TrainIcon",
    title: "Train",
  },
  {
    id: "3",
    iconName: "BusIcon",
    title: "Bus",
  },
  {
    id: "4",
    iconName: "ShipIcon",
    title: "Ship",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Icons name={item.iconName} color={textColor} />
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

function SelectRoute({ navigation, iconName, title, route, type }) {
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
}

const SearchFlight = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState("1");

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#85D3FF" : "transparent";
    const color = item.id === selectedId ? "white" : "#C2C2C2";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.searchFlight}>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          horizontal={true}
        />

        <SelectRoute
          iconName="LocationIcon"
          title="From"
          route="Istanbul"
          navigation={navigation}
          type={"Routes"}
        />

        <SelectRoute
          iconName="LocationIcon"
          title="To"
          route="Ankara"
          navigation={navigation}
          type={"Routes"}
        />
        <SelectRoute
          iconName="CalendarIcon"
          title="Departure"
          route="Sat, 24 Dec 2022"
          navigation={navigation}
          type={"Calendar"}
        />
        <SelectRoute
          iconName="UserIcon"
          title="Passenger & Cabin Class"
          route="1 Passenger, Economy"
          navigation={navigation}
          type={"Passenger"}
        />
        <TouchableOpacity
          style={styles.searchFlightButton}
          onPress={() => console.log("SearchFlight")}
        >
          <Text style={styles.searchButtonText}>Search Flight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchFlight;
