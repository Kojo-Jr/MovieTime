import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from "react-native";
import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../../context/AuthContext/AuthContext";
import LocalLoading from "../../../components/LoadingIndicator/LocalLoading";
const SignUp = () => {
  const { signIn } = useAuth();
  const [localLoading, setLocalLoading] = useState(false);

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // Sign Up Function
  const handleSignUp = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill all the fields");
    } else {
      setLocalLoading(true);
      try {
        //  make an API call to create the user
        // use a timeout to simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        Alert.alert("Success", "Account created successfully");
        signIn();
      } catch (error) {
        Alert.alert("Error", "Failed to create account");
      } finally {
        setLocalLoading(false);
      }
    }
  };

  // TODO: Local Loading
  if (localLoading) {
    return <LocalLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Welcome to Movietime!</Text>
        </View>
        <View>
          <Text style={styles.headerText}>
            Your personal guide to the world of Cinema
          </Text>
        </View>
      </View>

      {/* Sign Up Details */}
      <View style={styles.signUpContainer}>
        {/* Email */}
        <View>
          <TextInput
            style={styles.emailTextInput}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email, phone number or username"
            placeholderTextColor={"gray"}
            keyboardType="email-address"
          />
        </View>

        {/* password */}
        <View>
          <TextInput
            style={styles.passwordTextInput}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            placeholderTextColor={"gray"}
            secureTextEntry={true}
          />
        </View>

        {/* Confirm Password */}
        {/* {renderConfirmPassword()} */}
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signUpButtonContainer}
        onPress={handleSignUp}
      >
        <Text style={styles.signUpButtonText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Alternative Sign Up Options */}
      <View style={styles.linksContainer}>
        <View>
          <Text style={styles.linkText}>or continue with</Text>
        </View>
        {/* Facebook Button  & HGoogle Button*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={styles.facebookButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleContainer}>
            <Image
              style={styles.googleIcon}
              source={require("../../../../assets/mockImages/google-logo.png")}
            />
            <Text style={styles.googleButtonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Already have an account? */}
      <View style={styles.alreadyHaveAccountContainer}>
        <View>
          <Text>Don't have an account?</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signUpLinkText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      {/* Skip */}
      {/* <TouchableOpacity
        style={{
          marginTop: wp("3"),
          alignSelf: "flex-end",
          padding: wp("2"),
          right: wp("3"),
          backgroundColor: "#003478",
          width: wp("15"),
          alignItems: "center",
          borderRadius: wp("1")
        }}
        onPress={handleSkip}
      >
        <Text style={{ color: "#fff", fontSize: wp("4") }}>Skip</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("3"),
    backgroundColor: "white"
  },
  header: {
    marginTop: wp("30"),
    alignItems: "center",
    gap: wp("2")
  },
  headerTitle: {
    fontSize: wp("6"),
    fontWeight: "600",
    fontFamily: "Roboto"
  },
  headerText: {
    fontFamily: "Roboto",
    color: "gray"
  },
  signUpContainer: {
    marginTop: wp("20"),
    alignItems: "center",
    gap: wp("5")
  },
  emailTextInput: {
    backgroundColor: "#FAFAFA",
    padding: wp("3"),
    width: wp("80"),
    borderRadius: wp("2")
  },
  passwordTextInput: {
    backgroundColor: "#FAFAFA",
    padding: wp("3"),
    width: wp("80"),
    borderRadius: wp("2")
  },
  forgotPasswordContainer: {
    marginLeft: wp("8"),
    marginTop: wp("3")
  },
  forgotPasswordText: {
    color: "#77C8B2"
  },
  signUpButtonContainer: {
    marginTop: wp("10"),
    backgroundColor: "#FB5558",
    width: wp("80"),
    alignItems: "center",
    alignSelf: "center",
    borderRadius: wp("5")
  },
  signUpButtonText: {
    color: "#fff",
    padding: wp("4"),
    fontSize: wp("4")
  },
  linksContainer: {
    marginTop: wp("20"),
    alignItems: "center",
    gap: wp("7")
  },
  linkText: {
    color: "gray"
  },
  buttonContainer: {
    flexDirection: "row",
    gap: wp("5")
  },
  facebookContainer: {
    width: wp("40"),
    backgroundColor: "#003478",
    borderRadius: wp("6"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("3"),
    gap: wp("2")
  },
  facebookButtonText: {
    color: "#fff"
  },
  googleContainer: {
    width: wp("40"),
    backgroundColor: "#FAFAFA",
    borderRadius: wp("6"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("3"),
    gap: wp("2")
  },
  googleIcon: {
    width: wp("7"),
    height: wp("7")
  },
  googleButtonText: {
    color: "gray"
  },
  alreadyHaveAccountContainer: {
    marginTop: wp("15"),
    alignSelf: "center",
    flexDirection: "row",
    gap: wp("0.5")
  },
  signUpLinkText: {
    color: "#77C8B2"
  }
});
