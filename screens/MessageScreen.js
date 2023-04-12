import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  
  import useBearStore from "../store/useBearStore";
  import { StatusBar } from "expo-status-bar";
  
  const MessageScreen = () => {
    const bears = useBearStore((state) => state.bears);
    return (
      <View style={styles.container}>
        <Text>Home! {bears}</Text>
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
      </View>
    );
  };
  
  export default MessageScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  