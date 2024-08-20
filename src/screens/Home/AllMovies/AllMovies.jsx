import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
export default function AllMovies() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader
        iconComponent={
          <Ionicons
            name="arrow-back"
            size={24}
            color={"black"}
            onPress={goBack}
          />
        }
        iconComponent2={<AntDesign name="search1" size={24} color={"black"} />}
        iconComponent3={
          <MaterialCommunityIcons name="account" size={32} color="black" />
        }
        headerTitleText={"Movies"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("4")
  }
});
