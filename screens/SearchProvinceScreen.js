import { View, Button, ScrollView, Text } from "react-native";

import useBearStore from "../store/useBearStore";

import { styles } from "../style/screens/SearchProvinceScreenStyle";
import { TextInput } from "react-native-gesture-handler";
import Icons from "../constants/icons/icons";

const SearchProvinceScreen = ({ navigation }) => {
  const bears = useBearStore((state) => state.bears);
  return (
    <View style={styles.searchProvinceScreen}>
      <View style={styles.container}>
        <View style={styles.closeButtonWrapper}>
          <Button
            style={styles.closeButton}
            title={"X"}
            color="#fff"
            onPress={() => navigation.goBack()}
          >
            <Icons name="CloseIcon" />
          </Button>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.textInput}
            placeholder="Type province"
            placeholderTextColor="#fff"
          />
        </View>

        <ScrollView>
          <Text>saadasd</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchProvinceScreen;
