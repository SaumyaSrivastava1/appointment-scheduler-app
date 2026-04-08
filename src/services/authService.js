import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUser = async (user) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export const loginUser = async (email, password) => {
  const storedUser = await AsyncStorage.getItem("user");

  // ❌ No user registered
  if (!storedUser) {
    return { status: "no_user" };
  }

  const user = JSON.parse(storedUser);

  // ❌ Invalid credentials
  if (user.email !== email || user.password !== password) {
    return { status: "invalid" };
  }

  // ✅ Success
  await AsyncStorage.setItem("isLoggedIn", "true");
  return { status: "success", user };
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem("isLoggedIn");
};

export const isUserLoggedIn = async () => {
  const value = await AsyncStorage.getItem("isLoggedIn");
  return value === "true";
};