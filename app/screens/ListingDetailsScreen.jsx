import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
