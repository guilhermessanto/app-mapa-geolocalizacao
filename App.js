import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 52.479761,
    longitude: 62.185661,
    latitudeDelta: 0.0922,
    /*  longitudeDelta: 0.0421, */
    latitudeDelta: 0,
    longitudeDelta: 0,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView style={estilos.map} initialRegion={regiaoInicial} />
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
