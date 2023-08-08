import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
	const coordinatePost = {
		latitude: 50.45015,
		longitude: 30.52385,
	};

	return (
		<View style={styles.container}>
			<MapView
				style={styles.mapStyle}
				region={{
					...coordinatePost,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				mapType="standard"
				minZoomLevel={10}
				onMapReady={() => console.log("Map is ready")}
				onRegionChange={() => console.log("Region change")}
			>
				<Marker title="I am here" coordinate={coordinatePost} description="Hello" />
			</MapView>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	mapStyle: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});
