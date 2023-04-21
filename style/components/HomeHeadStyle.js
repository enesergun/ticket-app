import { StyleSheet  } from "react-native";

export const styles = StyleSheet.create({
    head: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    profileSection: {
      flexDirection: "row",
      alignItems: "center",

    },
    profileButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: "white",
      borderColor: "#EDEDED",
      borderWidth: 1,
      marginRight: 7,
    },
    welcomeText: {
      fontSize: 14,
      marginBottom: 5,
      color: "#fff",
    },
    userName: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
    },
    notifications: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: "rgba(255, 255, 255, 0.1);",
      justifyContent: "center",
      alignItems: "center",
    }
  });
