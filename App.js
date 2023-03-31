import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import  useBearStore  from "./store/useBearStore";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const bears = useBearStore((state) => state.bears)
  return (
    <View style={styles.container}>
      <Text>Home! {bears}</Text>
      <TouchableOpacity onPress={() => useBearStore.getState().increasePopulation()}><Text>bas</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => useBearStore.getState().removeAllBears()}><Text>sıfırla</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
