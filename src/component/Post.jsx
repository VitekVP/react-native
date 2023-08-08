import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Post = ({ item }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.boxPost}>
			<View style={styles.fotoWrap}></View>
			<Text style={styles.labelFoto}>{item.title}</Text>
			<View style={styles.infoPost}>
				<TouchableOpacity style={styles.infoItem} onPress={() => navigation.navigate("Comments")}>
					<Feather name="message-circle" size={24} color="#BDBDBD" style={styles.iconRotate} />
					<Text style={styles.infoText}>{item.coments}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.infoItem}>
					<Feather name="thumbs-up" size={24} color="#BDBDBD" />
					<Text style={styles.infoText}>{item.likes}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.infoItem, styles.rightItem]} onPress={() => navigation.navigate("Map")}>
					<Feather name="map-pin" size={24} color="#BDBDBD" />
					<Text style={styles.infoText}>{item.location}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Post;

const styles = StyleSheet.create({
	boxPost: {
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
