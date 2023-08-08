import { StyleSheet, View, Text, FlatList } from "react-native";

import Post from "../component/Post";

const PostsScreen = () => {
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
		<FlatList
			data={dataPosts}
			renderItem={({ item }) => <Post item={item} />}
			keyExtractor={item => item.id}
			showsVerticalScrollIndicator={false}
			style={styles.container}
			ListHeaderComponent={
				<View style={styles.boxUser}>
					<View style={styles.fotoUser}></View>
					<View>
						<Text style={styles.nameUser}>Natali Romanova</Text>
						<Text style={styles.emailUser}>email@example.com</Text>
					</View>
				</View>
			}
		/>
	);
};

export default PostsScreen;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "white",
		paddingHorizontal: 16,
	},

	boxUser: {
		marginTop: 32,
		marginBottom: 32,
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
