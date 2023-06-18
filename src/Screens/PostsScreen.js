import { StyleSheet, View, Text, Image } from "react-native";

const PostScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Публікації</Text>
				<Image source={require("../../assets/images/log-out-icon.png")} style={styles.logOutIcon} />
			</View>
			<View></View>
			<View>
				<View style={styles.tabBar}>
					<Image source={require("../../assets/images/grid-icon.png")} style={styles.gridIcon} />

					<View style={styles.btn}>
						<Image source={require("../../assets/images/union-icon.png")} style={styles.unionIcon} />
					</View>
					<Image source={require("../../assets/images/user-icon.png")} style={styles.userIcon} />
				</View>
				<View style={styles.indicator}></View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},

	header: {
		borderBottomWidth: 1,
		borderBottomColor: "#E8E8E8",
	},

	title: {
		paddingTop: 55,
		paddingBottom: 11,
		fontSize: 17,
		fontWeight: 500,
		alignSelf: "center",
	},

	logOutIcon: {
		width: 24,
		height: 24,
		position: "absolute",
		bottom: 10,
		right: 16,
	},

	tabBar: {
		paddingTop: 9,
		paddingBottom: 34,
		borderTopWidth: 1,
		borderTopColor: "#E8E8E8",
		display: "flex",
		flexDirection: "row",
		gap: 31,
		justifyContent: "center",
	},

	btn: {
		width: 70,
		height: 40,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		backgroundColor: "#FF6C00",
	},

	gridIcon: {
		width: 40,
		height: 40,
	},

	unionIcon: {
		width: 13,
		height: 13,
	},

	userIcon: {
		width: 40,
		height: 40,
	},

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

export default PostScreen;
