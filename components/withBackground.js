import { ImageBackground, StyleSheet, View } from "react-native";

const image = require("../assets/background.png");

const withBackground = ({WrappedComponent}) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <WrappedComponent />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
  image: {
    flex: 0.3,
    justifyContent: "center",
  },
});

export default withBackground;
