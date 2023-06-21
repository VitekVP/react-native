import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

const PostScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Публікації</Text>
				<Feather name="log-out" size={24} style={styles.logOutIcon} />
			</View>
			<View></View>
			<View>
				<View style={styles.tabBar}>
					<View style={styles.gridIcon}>
						<Ionicons name="grid-outline" size={24} color="#21212150" />
					</View>

					<TouchableOpacity style={styles.btn}>
						<AntDesign name="plus" size={13} color="#ffffff" />
					</TouchableOpacity>
					<View style={styles.userIcon}>
						<Feather name="user" size={24} color="#21212150" />
					</View>
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
		position: "absolute",
		bottom: 10,
		right: 16,
		color: "#BDBDBD",
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
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	userIcon: {
		width: 40,
		height: 40,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
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
