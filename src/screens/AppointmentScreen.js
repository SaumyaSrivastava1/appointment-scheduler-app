import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import {
  getAppointments,
  saveAppointments,
} from "../services/storageService";
import { container, heading } from "../styles/commonStyles";

export default function AppointmentScreen() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const data = await getAppointments();
    setAppointments(data || []);
  };

  const cancelAppointment = async (index) => {
    Alert.alert(
      "Cancel Appointment",
      "Are you sure you want to cancel?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: async () => {
            let updated = [...appointments];
            updated.splice(index, 1);

            await saveAppointments(updated);
            setAppointments(updated);
          },
        },
      ]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.provider}</Text>

      <Text style={styles.details}>
        {item.date} • {item.time}
      </Text>

      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => cancelAppointment(index)}
      >
        <Text style={styles.cancelText}>Cancel Appointment</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={container}>
      <Text style={heading}>My Appointments</Text>

      {appointments.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No appointments booked yet
          </Text>
        </View>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  name: {
    fontWeight: "600",
    fontSize: 16,
    color: "#111",
  },

  details: {
    marginTop: 6,
    color: "#64748B",
    fontSize: 14,
  },

  cancelBtn: {
    marginTop: 12,
    backgroundColor: "#ef4444",
    paddingVertical: 10,
    borderRadius: 8,
  },

  cancelText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  emptyContainer: {
    marginTop: 40,
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "gray",
  },
});