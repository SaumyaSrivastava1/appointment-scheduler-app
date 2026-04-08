import { TouchableOpacity, Text } from "react-native";

export default function MyAppointmentsButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#4f46e5",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
      }}
      onPress={() => navigation.navigate("Appointments")}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        MY APPOINTMENTS
      </Text>
    </TouchableOpacity>
  );
}