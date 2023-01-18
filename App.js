import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 37.401437,
    longitude: -116.86773,

    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };
  const { localizacao, setLocalizacao } = useState();

  const newLocalizacao = {
    latitude: 37.401437,
    longitude: -116.86773,

    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

  const novaLocalizacao = () => {};

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.map}
          initialRegion={regiaoInicial}
          liteMode={false}
          mapType="satellite"
        >
          <Marker
            coordinate={newLocalizacao}
            title="Titulo"
            draggable
            onPress={novaLocalizacao}
          />
        </MapView>
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
