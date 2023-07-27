import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonGoBack = () => {
	const navigation = useNavigation();

	return (
		<Ionicons name="arrow-back" size={24} style={styles.goBackIcon} onPress={() => navigation.navigate("Posts")} />
	);
};

export default ButtonGoBack;

const styles = StyleSheet.create({
	goBackIcon: {
		position: "absolute",
		bottom: 10,
		left: 16,
		color: "#212121cc",
	},
});
