import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons name="close" size={30} color={colors.white} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={colors.white}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  image: {
    borderWidth: 0.1,
    borderColor: "rgba(0,0,0,0)",
    width: "100%",
    height: "100%",
  },
});
