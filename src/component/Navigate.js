import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import BottomNavigate from "../component/BottomNavigate";
// import CreatePostScreen from "../Screens/CreatePostsScreen";
import CommentsScreen from "../Screens/CommentsScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
import MapScreen from "../Screens/MapScreen";
// import Home from "../Screens/Home";

const Navigate = () => {
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
				{/* <Stack.Screen name="Post" component={PostScreen} options={{ headerShown: false }} /> */}
				{/* <Stack.Screen name="CreatePost" component={CreatePostScreen} /> */}
				<Stack.Screen name="Comments" component={CommentsScreen} />
				{/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
				<Stack.Screen name="Map" component={MapScreen} />
				{/* <Stack.Screen name="Home" component={Home} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigate;
