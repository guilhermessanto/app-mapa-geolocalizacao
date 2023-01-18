import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 37.401437,
    longitude: -116.86773,
    latitudeDelta: 0.0922,
    /*  longitudeDelta: 0.0421, */
    latitudeDelta: 0.5,
    longitudeDelta: 0.4,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.map}
          initialRegion={regiaoInicial}
          liteMode={false}
          mapType="standard" // satellite, hybrid, terrain
          userInterfaceStyle="dark" //somente IOS
          maxZoomLevel={5}
          minZoomLevel={2}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
