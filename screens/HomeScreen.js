import { View, ImageBackground } from "react-native";

import useBearStore from "../store/useBearStore";
import HomeHead from "../components/HomeHead";
import SearchFlight from "../components/SearchFlight";
import Ticket from "../components/Ticket";
import { styles } from "../style/screens/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionComponent from "../components/SectionComponent";
const image = require("../assets/background.png");

const HomeScreen = ({ navigation }) => {
  const bears = useBearStore((state) => state.bears);
  return (
    <View style={styles.homeScreen}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
          <HomeHead navigation={navigation} />
          <SearchFlight navigation={navigation} />
          <SectionComponent title="Recent Activity" viewAll="View All">
           <Ticket />
          </SectionComponent>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
