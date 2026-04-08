import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAppointments = async () => {
  const data = await AsyncStorage.getItem("appointments");
  return data ? JSON.parse(data) : [];
};

export const saveAppointments = async (appointments) => {
  await AsyncStorage.setItem("appointments", JSON.stringify(appointments));
};