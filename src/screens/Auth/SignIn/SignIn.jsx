import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginLoading from "../../../components/LoadingIndicator/LoginLoading";

const SignIn = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  };
  const { signIn } = useAuth();
  const [loginloading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Check if user is logged in
      if (user) {
        signIn(); // If user is logged in, call signIn function
      }
    });
    return unsubscribe; // Clean up the listener when the component unmounts
  }, [signIn]); // Pass signIn function as a dependency

  const handleSignIn = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill all the fields");
    } else {
      setLoginLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Alert.alert("Success", "Logged in successfully");
        signIn();
      } catch (error) {
        Alert.alert("Error", "Failed to sign in");
      } finally {
        setLoginLoading(false);
      }
    }
  };
  if (loginloading) {
    return <LoginLoading />;
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
          onPress={handleSignIn}
        >
          <Text style={styles.signUpButtonText}>SIGN IN</Text>
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
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLinkText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
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
    backgroundColor: "green",
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
