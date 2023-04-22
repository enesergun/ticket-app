import { View, ImageBackground, ScrollView, Image } from "react-native";

import useBearStore from "../store/useBearStore";
import HomeHead from "../components/HomeHead";
import SearchFlight from "../components/SearchFlight";
import Ticket from "../components/Ticket";
import ScrollableCards from "../components/ScrollableCards";
import { styles } from "../style/screens/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionComponent from "../components/SectionComponent";

const image = require("../assets/background.png");

const HomeScreen = ({ navigation }) => {
  const bears = useBearStore((state) => state.bears);
  return (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.backgroundImage}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <SafeAreaView style={styles.container}>
          <HomeHead navigation={navigation} />
          <SearchFlight navigation={navigation} />
          <SectionComponent title="Recent Activity" viewAll="View All">
            <Ticket />
          </SectionComponent>
          <SectionComponent title="Ongoing Promo" viewAll="View All">
            <ScrollableCards type="big" />
          </SectionComponent>
          <SectionComponent title="Popular Destination" viewAll="View All">
            <ScrollableCards type="small" />
          </SectionComponent>

          <StatusBar style="auto" />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
