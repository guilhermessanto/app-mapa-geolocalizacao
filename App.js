import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Alert, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  /* State para localização */
  const [minhaLocalizacao, setMinhalocalizacao] = useState(null);
  useEffect(() => {
    async function obterLocalizacao() {
      /* Acessando o status da requisição de permissão de uso */
      const { status } = Location.requestForegroundPermissionsAsync();
      //verificando o status

      /*     if (status !== "granted") {
        Alert.alert(
          "Ops",
          "Você não autorizou o uso de recursos de localização"
        );
        return;
      } */

      //Acessando os dados de geolocalização
      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      // Adicionando os dados ao state
      setMinhalocalizacao(localizacaoAtual);
    }
    obterLocalizacao();
  }, []);

  const regiaoInicial = {
    latitude: 37.401437,
    longitude: -116.86773,

    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

  const [localizacao, setLocalizacao] = useState();
  const novaLocalizacao = (event) => {
    setLocalizacao({
      latitude: minhaLocalizacao.coords.latitude,
      longitude: minhaLocalizacao.coords.longitude,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.00121,
    });
    console.log(localizacao);
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <View style={estilos.botao}>
          <Button
            title="descobrir minha localização"
            onPress={novaLocalizacao}
          />
        </View>
        <View style={estilos.viewMapa}>
          <MapView
            style={estilos.map}
            // initialRegion={regiaoInicial}
            region={localizacao ?? regiaoInicial}
            liteMode={false}
            mapType="satellite"
          >
            {localizacao && (
              <Marker coordinate={localizacao} title="Titulo" draggable />
            )}
          </MapView>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {},
  viewMapa: { flex: 1 },
  map: {
    width: "100%",
    height: "100%",
  },
});
