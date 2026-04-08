import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { authStyles } from "../styles/authStyles";
import { registerUser } from "../services/authService";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/validation"; // ✅ added

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({}); // ✅ added

  const handleRegister = async () => {
    // ✅ validation
    const nameError = validateName(name.trim());
    const emailError = validateEmail(email.trim());
    const passwordError = validatePassword(password.trim());

    if (nameError || emailError || passwordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setErrors({}); // clear errors

    await registerUser({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });

    alert("Registered Successfully");
    navigation.navigate("Login");
  };

  return (
    <View style={authStyles.container}>
      <View style={authStyles.innerContainer}>
        {/* 🔥 LOGO */}
        <Image source={require("../assets/logo.png")} style={authStyles.logo} />

        {/* TITLE */}
        <Text style={authStyles.loginTitle}>Register</Text>
        <Text style={authStyles.subtitle}>Create your account</Text>

        {/* Name */}
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
          style={authStyles.input}
        />
        {errors.name ? (
          <Text style={{ color: "red", marginBottom: 8 }}>{errors.name}</Text>
        ) : null}

        {/* Email */}
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
          <Text style={{ color: "red", marginBottom: 8 }}>{errors.email}</Text>
        ) : null}

        {/* Password */}
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

        {/* Button */}
        <TouchableOpacity style={authStyles.button} onPress={handleRegister}>
          <Text style={authStyles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text
          style={authStyles.link}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account? Login
        </Text>
      </View>
    </View>
  );
}
