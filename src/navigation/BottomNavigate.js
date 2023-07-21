import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import ButtonLogOut from "../component/ButtonLogOut";
import ButtonGoBack from "../component/ButtonGoBack";

const BottomNavigate = () => {
	const Tabs = createBottomTabNavigator();

	return (
		<>
			<Tabs.Navigator
				initialRouteName="Posts"
				screenOptions={{
					...styles.screenStyles,
				}}
			>
				<Tabs.Screen
					name="Posts"
					component={PostsScreen}
					options={{
						title: "Публікації",
						headerRight: () => <ButtonLogOut style={styles.logOutIcon} />,
						tabBarIcon: ({ color }) => <Ionicons name="grid-outline" size={24} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="CreatePost"
					component={CreatePostScreen}
					options={{
						title: "Створити публікацію",
						tabBarIcon: ({ color }) => <AntDesign name="plus" size={24} color={color} />,
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

	screenStyles: {
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
	},
});
