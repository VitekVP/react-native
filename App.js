import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/component/RegistrationScreen";
import LoginScreen from "./src/component/LoginScreen";
import PostScreen from "./src/Screens/PostsScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<RegistrationScreen />
			{/* <LoginScreen /> */}
			{/* <PostScreen /> */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
