import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonLogOut = () => {
	const navigation = useNavigation();

	return <Feather name="log-out" size={24} style={styles.logOutIcon} onPress={() => navigation.navigate("Login")} />;
};

export default ButtonLogOut;

const styles = StyleSheet.create({
	logOutIcon: {
		position: "absolute",
		bottom: 10,
		right: 16,
		color: "#BDBDBD",
	},
});
