import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";

export default function ProviderCard({ item, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.card}>
        
        {/* Image */}
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        {/* Info */}
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.category}</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginVertical: 8,
    alignItems: "center",

    // shadow
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eee",
  },

  info: {
    marginLeft: 12,
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  badge: {
    marginTop: 6,
    alignSelf: "flex-start",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  badgeText: {
    fontSize: 12,
    color: "#4f46e5",
    fontWeight: "500",
  },
});