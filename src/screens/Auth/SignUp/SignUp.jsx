import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../../context/AuthContext/AuthContext";
import LocalLoading from "../../../components/LoadingIndicator/LocalLoading";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate("SignInScreen");
  };
  const { signIn } = useAuth();
  const [localLoading, setLocalLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSignUp = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill all the fields");
    } else {
      setLocalLoading(true);
      try {
        // Firebase sign-up process
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Simulating delay for UX improvement (optional)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        Alert.alert("Success", "Account created successfully");

        // Call the signIn function after successful account creation (if needed)
        signIn();
      } catch (error) {
        console.error("Error creating account:", error);
        Alert.alert("Error", error.message || "Failed to create account");
      } finally {
        setLocalLoading(false);
      }
    }
  };

  if (localLoading) {
    return <LocalLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome to Movietime!</Text>
          <Text style={styles.headerText}>
            Your personal guide to the world of Cinema
          </Text>
        </View>

        <View style={styles.signUpContainer}>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButtonContainer}
          onPress={handleSignUp}
        >
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <Text style={styles.linkText}>or continue with</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={wp("6")} color="white" />
              <Text style={styles.facebookButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialButton, styles.googleButton]}
            >
              <Image
                style={styles.googleIcon}
                source={require("../../../../assets/mockImages/google-logo.png")}
              />
              <Text style={styles.googleButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.alreadyHaveAccountContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signUpLinkText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollContainer: {
    flexGrow: 1,
    padding: wp("5"),
    justifyContent: "center"
  },
  header: {
    alignItems: "center",
    marginBottom: hp("5")
  },
  headerTitle: {
    fontSize: wp("6"),
    fontWeight: "600",
    fontFamily: "Roboto",
    marginBottom: hp("1")
  },
  headerText: {
    fontFamily: "Roboto",
    color: "gray",
    fontSize: wp("3.5")
  },
  signUpContainer: {
    alignItems: "center",
    marginBottom: hp("3")
  },
  textInput: {
    backgroundColor: "#FAFAFA",
    padding: wp("3"),
    width: wp("85"),
    borderRadius: wp("2"),
    marginBottom: hp("2"),
    fontSize: wp("3.5")
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: hp("3")
  },
  forgotPasswordText: {
    color: "#77C8B2",
    fontSize: wp("3.5")
  },
  signUpButtonContainer: {
    backgroundColor: "#FB5558",
    width: wp("85"),
    alignItems: "center",
    alignSelf: "center",
    borderRadius: wp("5"),
    marginBottom: hp("5")
  },
  signUpButtonText: {
    color: "#fff",
    padding: wp("4"),
    fontSize: wp("4")
  },
  linksContainer: {
    alignItems: "center",
    marginBottom: hp("5")
  },
  linkText: {
    color: "gray",
    marginBottom: hp("2"),
    fontSize: wp("3.5")
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  socialButton: {
    width: wp("40"),
    backgroundColor: "#003478",
    borderRadius: wp("6"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("3"),
    marginHorizontal: wp("2")
  },
  googleButton: {
    backgroundColor: "#FAFAFA"
  },
  facebookButtonText: {
    color: "#fff",
    marginLeft: wp("2"),
    fontSize: wp("3.5")
  },
  googleIcon: {
    width: wp("6"),
    height: wp("6")
  },
  googleButtonText: {
    color: "gray",
    marginLeft: wp("2"),
    fontSize: wp("3.5")
  },
  alreadyHaveAccountContainer: {
    alignSelf: "center",
    flexDirection: "row",
    gap: wp("1")
  },
  signUpLinkText: {
    color: "#77C8B2",
    fontSize: wp("3.5")
  }
});
