import { View, ImageBackground } from "react-native";

import useBearStore from "../store/useBearStore";
import HomeHead from "../components/HomeHead";
import SearchFlight from "../components/SearchFlight";
import { styles } from "../style/screens/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
const image = require("../assets/background.png");

const HomeScreen = ({ navigation }) => {
  const bears = useBearStore((state) => state.bears);
  return (
    <View style={styles.homeScreen}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
          <HomeHead navigation={navigation} />
          <SearchFlight navigation={navigation} />
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
