import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { slots } from "../utils/constants";
import {
  getAppointments,
  saveAppointments,
} from "../services/storageService";

export default function DetailScreen({ route, navigation }) {
  const { provider } = route.params;

  const bookAppointment = async (time) => {
    const date = new Date().toLocaleDateString();
    let appointments = await getAppointments();

    const exists = appointments.find(
      (a) =>
        a.provider === provider.name &&
        a.time === time &&
        a.date === date
    );

    if (exists) {
      Alert.alert("Already booked!");
      return;
    }

    appointments.push({ provider: provider.name, time, date });

    await saveAppointments(appointments);

    Alert.alert("Booked!", `${provider.name} at ${time}`);
    navigation.navigate("Appointments");
  };

  return (
    <View style={styles.container}>
      
      {/* Profile Card */}
      <View style={styles.card}>
        <Image source={{ uri: provider.image }} style={styles.image} />

        <Text style={styles.name}>{provider.name}</Text>
        <Text style={styles.category}>{provider.category}</Text>

        {/* Rating & Experience */}
        <View style={styles.row}>
          <Text style={styles.rating}>⭐ {provider.rating}</Text>
          <Text style={styles.exp}>{provider.experience}</Text>
        </View>

        {/* Description */}
        <Text style={styles.desc}>{provider.description}</Text>
      </View>

      {/* Slots */}
      <Text style={styles.section}>Available Slots</Text>

      <View style={styles.slotContainer}>
        {slots.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={styles.slot}
            onPress={() => bookAppointment(time)}
          >
            <Text style={styles.slotText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 22,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    marginBottom: 25,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  category: {
    color: "#64748B",
    marginTop: 4,
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },

  rating: {
    fontSize: 14,
    color: "#f59e0b",
    fontWeight: "600",
  },

  exp: {
    fontSize: 14,
    color: "#10b981",
    fontWeight: "500",
  },

  desc: {
    marginTop: 12,
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  // 🔥 CENTERED SECTION
  section: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 14,
    color: "#1E293B",
    textAlign: "center", // ✅ center text
  },

  // 🔥 CENTERED SLOT CONTAINER
  slotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // ✅ center horizontally
    gap: 12,
  },

  // 🔥 BETTER BUTTON LOOK
  slot: {
    backgroundColor: "#4f46e5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  slotText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});