import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import TicketScreen from "./screens/TicketScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";

import HomeIcon from "./constants/icons/HomeIcon";
import HomeFilledIcon from "./constants/icons/HomeFilledIcon";
import TicketIcon from "./constants/icons/TicketIcon";
import TicketFilledIcon from "./constants/icons/TicketFilledIcon";
import MessageIcon from "./constants/icons/MessageIcon";
import ProfileIcon from "./constants/icons/ProfileIcon";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <HomeFilledIcon color={color} />;
                }
                return <HomeIcon />;
              },
            }}
          />
          <Tab.Screen
            name="Ticket"
            component={TicketScreen}
            options={{
              tabBarLabel: "Ticket",
              tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <TicketFilledIcon color={color} />;
                }
                return <TicketIcon />;
              },
            }}
          />
          <Tab.Screen
            name="Message"
            component={MessageScreen}
            options={{
              tabBarLabel: "Message",
              tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <MessageIcon color={color} />;
                }
                return <MessageIcon />;
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size, focused }) => {
                if (focused) {
                  return <ProfileIcon color={color} />;
                }
                return <ProfileIcon />;
              },
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
