import { StyleSheet, View, Text, ImageBackground } from "react-native";

// import ButtonLogOut from "../component/ButtonLogOut";

const ProfileScreen = () => {
	return (
		<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
			<View style={styles.box}>{/* <ButtonLogOut style={styles.btnLogOut} /> */}</View>
		</ImageBackground>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	imageFone: {
		flex: 1,
		justifyContent: "flex-end",
		resizeMode: "cover",
		height: "100%",
		width: "100%",
	},

	box: {
		width: "100%",
		height: 549,
		paddingTop: 103,
		paddingRight: 16,
		paddingLeft: 16,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	btnLogOut: {
		position: "absolute",
		top: 22,
	},
});
