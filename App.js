import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 37.401437,
    longitude: -116.86773,
    latitudeDelta: 0.0922,
    /*  longitudeDelta: 0.0421, */
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };
  const localizacao = {
    latitude: 37.401437,
    longitude: -116.86773,
    latitudeDelta: 0.0922,
    /*  longitudeDelta: 0.0421, */
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

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
            coordinate={localizacao}
            title="Titulo"
            draggable
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
          >
            {/* <Image source={require("./assets/pointing.png")} /> */}
          </Marker>
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
