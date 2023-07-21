import { StyleSheet, View, Text } from "react-native";

const PostsScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.boxUser}>
				<View style={styles.fotoUser}></View>
				<View>
					<Text style={styles.nameUser}>Natali Romanova</Text>
					<Text style={styles.emailUser}>email@example.com</Text>
				</View>
			</View>
		</View>
	);
};

export default PostsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingHorizontal: 16,
	},

	boxUser: {
		marginTop: 32,
		display: "flex",
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},

	fotoUser: {
		width: 60,
		height: 60,
		borderRadius: 16,
		backgroundColor: "#E8E8E8",
	},

	nameUser: {
		fontWeight: 700,
		fontSize: 13,
		lineHeight: 15.23,
		color: "#212121",
	},

	emailUser: {
		fontWeight: 400,
		fontSize: 11,
		lineHeight: 12.89,
		color: "#212121",
	},
});
