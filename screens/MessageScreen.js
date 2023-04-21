import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import useBearStore from "../store/useBearStore";
import { StatusBar } from "expo-status-bar";
const image = require("../assets/background.png");

const MessageScreen = () => {
  const bears = useBearStore((state) => state.bears);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>Message! {bears}</Text>
        <TouchableOpacity
          onPress={() => useBearStore.getState().increasePopulation()}
        >
          <Text>bas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => useBearStore.getState().removeAllBears()}
        >
          <Text>sıfırla</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.3,
    justifyContent: "center",
  },
});
