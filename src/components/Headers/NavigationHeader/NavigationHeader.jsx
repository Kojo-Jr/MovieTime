import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const NavigationHeader = ({
  iconComponent,
  iconComponent2,
  iconComponent3,
  headerTitleText
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        {iconComponent ? iconComponent : <iconComponent />}
        {/* <Ionicons name="menu" size={28} color="black" /> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.headerTitleText}>{headerTitleText}</Text>
      </TouchableOpacity>

      <View style={styles.headerSearchAndAccount}>
        <TouchableOpacity>
          {iconComponent2 ? iconComponent2 : <iconComponent2 />}
          {/* <AntDesign name="search1" size={24} color="black" /> */}
        </TouchableOpacity>
        <TouchableOpacity>
          {iconComponent3 ? iconComponent3 : <iconComponent3 />}

          {/* <MaterialCommunityIcons name="account" size={32} color="black" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: wp("8"),
    justifyContent: "space-between"
  },
  headerTitleText: {
    color: "#FB5558",
    fontSize: wp("6"),
    alignItems: "center"
  },
  headerSearchAndAccount: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("5")
  }
});