import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { authStyles } from "../styles/authStyles";
import { loginUser } from "../services/authService";
import {
  validateEmail,
  validatePassword,
} from "../utils/validation";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    const emailError = validateEmail(email.trim());
    const passwordError = validatePassword(password.trim());

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setErrors({});

    const result = await loginUser(email.trim(), password.trim());

    if (result.status !== "success") {
      alert(
        "Please enter correct credentials or register first"
      );
      return;
    }

    navigation.replace("Home");
  };

  return (
  <View style={authStyles.container}>
    <View style={authStyles.innerContainer}>

      <Image
        source={require("../assets/logo.png")}
        style={authStyles.logo}
      />

      <Text style={authStyles.loginTitle}>Login</Text>
      <Text style={authStyles.subtitle}>Login to continue</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrors((prev) => ({ ...prev, email: "" }));
        }}
        style={authStyles.input}
      />
      {errors.email ? (
        <Text style={{ color: "red", marginBottom: 8 }}>
          {errors.email}
        </Text>
      ) : null}

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setErrors((prev) => ({ ...prev, password: "" }));
        }}
        style={authStyles.input}
      />
      {errors.password ? (
        <Text style={{ color: "red", marginBottom: 8 }}>
          {errors.password}
        </Text>
      ) : null}

      <TouchableOpacity style={authStyles.button} onPress={handleLogin}>
        <Text style={authStyles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text
        style={authStyles.link}
        onPress={() => navigation.navigate("Register")}
      >
        Don’t have an account? Register
      </Text>

    </View>
  </View>
);
}