import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import ButtonLogOut from "./ButtonLogOut";
import ButtonGoBack from "./ButtonGoBack";

const BottomNavigate = () => {
	const Tabs = createBottomTabNavigator();
	const navigation = useNavigation();

	return (
		<>
			<Tabs.Navigator
				initialRouteName="Posts"
				screenOptions={{
					headerTitleAlign: "center",
					tabBarShowLabel: false,
					headerStyle: {
						// height: 88,
						borderBottomWidth: 1,
						borderBottomColor: "#E8E8E8",
					},
					headerTitleStyle: {
						fontSize: 17,
						fontWeight: 500,
					},
					tabBarStyle: {
						height: 83,
						paddingTop: 9,
						borderTopWidth: 1,
						borderTopColor: "#E8E8E8",
						paddingHorizontal: 60,
					},
					tabBarItemStyle: {
						width: 70,
						height: 40,
						borderRadius: 20,
						marginHorizontal: 10,
					},
					tabBarActiveTintColor: "#ffffff",
					tabBarActiveBackgroundColor: "#FF6C00",
				}}
			>
				<Tabs.Screen
					name="Posts"
					component={PostsScreen}
					options={{
						title: "Публікації",
						headerRight: () => <ButtonLogOut />,
						tabBarIcon: ({ color }) => <Ionicons name="grid-outline" size={24} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="CreatePost"
					component={CreatePostScreen}
					options={{
						title: "Створити публікацію",
						tabBarIcon: ({ color }) => <AntDesign name="plus" size={13} color={color} />,
						headerLeft: () => <ButtonGoBack />,
						tabBarStyle: { display: "none" },
					}}
				/>
				<Tabs.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						headerShown: false,
						tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
					}}
				/>
			</Tabs.Navigator>
		</>
	);
};

export default BottomNavigate;

const styles = StyleSheet.create({
	logOutIcon: {
		position: "absolute",
		bottom: 10,
		right: 16,
		color: "#BDBDBD",
	},
});
