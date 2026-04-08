import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import { useLayoutEffect } from "react";
import { providers } from "../utils/constants";
import ProviderCard from "../components/ProviderCard";
import HeaderMenu from "../components/HeaderMenu";

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderMenu navigation={navigation} />,
      title: "Home", // optional header title
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <StatusBar barStyle="dark-content" />

      {/* Title */}
      <Text style={styles.heading}>Service Providers</Text>

      {/* List */}
      <FlatList
        data={providers}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ProviderCard
            item={item}
            onPress={() =>
              navigation.navigate("Details", { provider: item })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  heading: {
    fontSize: 26,            // 🔥 slightly bigger
    fontWeight: "700",
    marginBottom: 12,
    color: "#0F172A",        // deeper color
  },

  listContainer: {
    paddingBottom: 20,
  },
});