import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Carousel = () => {
  return (
    <View style={styles.carousel}>
      <View>
        <Image
          style={styles.carouselImageCard}
          source={require("../../../../assets/mockImages/stranger-things.jpg")} //require("./assets/mockImages/stranger-things.jpg")}
        />
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carousel: {
    marginTop: wp("5"),
    alignItems: "center"
  },
  carouselImageCard: {
    width: wp("90"),
    height: wp("50"),
    borderRadius: wp("2"),
    resizeMode: "cover"
  }
});
