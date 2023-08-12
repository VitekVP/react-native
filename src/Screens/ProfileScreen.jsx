import { StyleSheet, View, Text, ImageBackground, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import ButtonLogOut from "../component/ButtonLogOut";
import Post from "../component/Post";

const ProfileScreen = () => {
	const dataPosts = [
		{
			id: "0001",
			title: "Ліс",
			coments: 8,
			likes: 153,
			location: "Ukraine",
		},
		{
			id: "0002",
			title: "Захід на Чорному морі",
			coments: 3,
			likes: 200,
			location: "Ukraine",
		},
		{
			id: "0003",
			title: "Старий будиночок у Венеції",
			coments: 50,
			likes: 200,
			location: "Italy",
		},
	];

	return (
		<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.wrapContent}>
					<ButtonLogOut style={styles.btnLogOut} />
					<View style={styles.fotoProfile}>
						<View style={styles.addIconWrap}>
							<AntDesign name="pluscircleo" size={25} style={styles.addIcon} />
						</View>
					</View>
					<Text style={styles.title}>Natali Romanova</Text>
					{dataPosts.map(post => {
						return <Post key={post.id} item={post} />;
					})}
				</View>
			</ScrollView>
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

	// scrollContent: {
	// 	flexGrow: 1,
	// 	justifyContent: "space-between",
	// },

	wrapContent: {
		flex: 1,
		// gap: 32,
		paddingTop: 92,
		paddingBottom: 16,
		marginTop: 147,
		width: "100%",
		paddingHorizontal: 16,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	btnLogOut: {
		position: "absolute",
		top: 22,
		right: 16,
		color: "#BDBDBD",
	},

	fotoProfile: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		alignSelf: "center",
		position: "absolute",
		top: -60,
		zIndex: 1,
	},

	addIconWrap: {
		width: 25,
		height: 25,
		borderRadius: 50,
		overflow: "hidden",
		position: "absolute",
		bottom: 14,
		right: -12.5,
		zIndex: 2,
	},

	addIcon: {
		color: "#FF6C00",
		backgroundColor: "#ffffff",
	},

	addIconRotate: {
		color: "#E8E8E8",
		transform: [{ rotate: "45deg" }],
	},

	title: {
		fontWeight: 500,
		fontSize: 30,
		lineHeight: 35.16,
		color: "#212121",
		alignSelf: "center",
		marginBottom: 32,
	},

	fotoWrap: {
		height: 240,
		marginBottom: 8,
		backgroundColor: "#E8E8E8",
		borderRadius: 8,
		overflow: "hidden",
	},

	labelFoto: {
		marginBottom: 8,
		fontWeight: 500,
		fontSize: 16,
		lineHeight: 18.75,
		color: "#212121",
	},

	infoPost: {
		display: "flex",
		flexDirection: "row",
		gap: 24,
	},

	infoItem: {
		display: "flex",
		flexDirection: "row",
		gap: 6,
		alignItems: "center",
	},

	rightItem: {
		marginLeft: "auto",
	},

	iconRotate: {
		transform: [{ scaleX: -1 }],
	},

	infoText: {
		fontSize: 16,
		lineHeight: 18.75,
		color: "#212121",
	},
});
