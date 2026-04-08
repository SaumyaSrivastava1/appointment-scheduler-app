import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#f9fafb",
  padding: 20,
  justifyContent: "center",
  alignItems: "center",
},

innerContainer: {
  width: "100%",
  marginTop: -40,
},

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },

  logo: {
  width: 110,
  height: 110,
  borderRadius: 55, // half of width/height → circle
  alignSelf: "center",
  resizeMode: "cover",
  marginBottom: 15,
},

  loginTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  button: {
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#4f46e5",
  },
});