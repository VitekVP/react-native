import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { BackHandler, StyleSheet } from "react-native";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import BottomNavigate from "./BottomNavigate";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";
import ButtonGoBack from "../component/ButtonGoBack";

const Navigate = () => {
	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
		return () => backHandler.remove();
	}, []);
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
					...styles.screenStyles,
				}}
			>
				<Stack.Screen name="Registration" component={RegistrationScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="BottomTab" component={BottomNavigate} />
				<Stack.Screen
					name="Comments"
					component={CommentsScreen}
					options={{
						headerShown: true,
						title: "Коментарі",
						headerLeft: () => <ButtonGoBack />,
					}}
				/>
				<Stack.Screen
					name="Map"
					component={MapScreen}
					options={{
						headerShown: true,
						title: "Мапа",
						headerLeft: () => <ButtonGoBack />,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigate;

const styles = StyleSheet.create({
	screenStyles: {
		headerTitleAlign: "center",
		headerShown: false,
		headerStyle: {
			// height: 88,
			borderBottomWidth: 1,
			borderBottomColor: "#E8E8E8",
		},
		headerTitleStyle: {
			fontSize: 17,
			fontWeight: 500,
		},
	},
});
