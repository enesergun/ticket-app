import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  TicketContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 20,
    borderRadius: 15,
  },
  TicketProvince: {
    fontSize: 12,
    color: "#757575",
    lineHeight: 16,
  },
  TicketTime: {
    fontSize: 20,
    color: "#000",
    fontWeight: "600",
  },
  TicketDay: {
    fontSize: 12,
    color: "#757575",
    lineHeight: 16,
  },
  TicketınfoRight: {
    alignItems: "flex-end",
  },
  Trip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
    marginBottom: 10,
  },
  dashedDot: {
    position: "absolute",
    width: 100,
    height: 1,
    borderColor: "#757575",
    borderStyle: "dashed",
    borderWidth: 1,
    zIndex: -1,
  },
  FlightIcon: {
    rotate: "90deg",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#757575",
  },
});
