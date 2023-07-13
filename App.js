import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import Navigate from "./src/component/Navigate";
import HomeIndicator from "./src/component/HomeIndicator";

const App = () => {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Navigate />
			<StatusBar style="auto" />
			<HomeIndicator />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
export default App;
