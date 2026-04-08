import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from "react-native";
import { logoutUser } from "../services/authService";

export default function HeaderMenu({ navigation }) {
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    Alert.alert("Confirm Logout", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await logoutUser();
          navigation.replace("Login");
        },
      },
    ]);
  };

  return (
    <>
      {/* Menu Icon */}
      <Text
        onPress={() => setVisible(true)}
        style={{ marginRight: 15, fontSize: 22 }}
      >
        ☰
      </Text>

      {/* Modal Dropdown */}
      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                navigation.navigate("Appointments");
              }}
            >
              <Text style={styles.item}>My Appointments</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                handleLogout();
              }}
            >
              <Text style={[styles.item, { color: "red" }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  menu: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 180,
    paddingVertical: 10,
    elevation: 5,
  },
  item: {
    padding: 12,
    fontSize: 16,
  },
});