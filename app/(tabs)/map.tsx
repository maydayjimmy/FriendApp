import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function TabTwoScreen() {
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Image
            source={require("@/assets/images/phones.png")}
            style={styles.coverPhoto}
          />
        }
      >
        <ThemedView>
          <ThemedText type="title">Map View</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
      <View style={styles.viewContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="My Location"
            description="This is a marker in San Francisco"
          />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  coverPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
