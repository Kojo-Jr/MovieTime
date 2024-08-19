import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationHeader } from "../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationHeader
        iconComponent={
          <Ionicons
            name="menu"
            size={24}
            color={"black"}
            onPress={openDrawer}
          />
        }
        iconComponent2={<AntDesign name="" size={24} color={"black"} />}
        iconComponent3={
          <MaterialCommunityIcons name="" size={32} color="black" />
        }
        headerTitleText={"Profile"}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("4")
  }
});
