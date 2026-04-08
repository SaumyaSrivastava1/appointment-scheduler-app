import { Text, Alert } from "react-native";
import { logoutUser } from "../services/authService";

export default function LogoutButton({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            await logoutUser();
            navigation.replace("Login");
          },
        },
      ]
    );
  };

  return (
    <Text
      onPress={handleLogout}
      style={{
        color: "#ef4444",
        fontWeight: "bold",
        marginRight: 10,
      }}
    >
      Logout
    </Text>
  );
}