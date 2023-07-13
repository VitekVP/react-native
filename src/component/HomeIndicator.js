import { View, StyleSheet } from "react-native";

const HomeIndicator = () => {
	return <View style={styles.indicator}></View>;
};

export default HomeIndicator;

const styles = StyleSheet.create({
	indicator: {
		width: 134,
		height: 5,
		backgroundColor: "#212121",
		borderRadius: 100,
		marginBottom: 8,
		alignSelf: "center",
		position: "absolute",
		bottom: 0,
	},
});
