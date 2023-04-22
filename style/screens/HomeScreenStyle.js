import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "#F2F2F2",
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  scrollView: {
    flex: 0.5,
  },

  image: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: Dimensions.get('window').height / 3.4,
  },
});
