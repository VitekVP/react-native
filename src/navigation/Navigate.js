import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { BackHandler } from "react-native";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import BottomNavigate from "./BottomNavigate";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";

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
					headerTitleAlign: "center",
					headerShown: false,
				}}
			>
				<Stack.Screen name="Registration" component={RegistrationScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="BottomTab" component={BottomNavigate} />
				<Stack.Screen name="Comments" component={CommentsScreen} />
				<Stack.Screen name="Map" component={MapScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigate;
