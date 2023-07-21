import { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				// keyboardVerticalOffset={-60}
			>
				<View style={styles.wrapBoxFoto}>
					<View style={styles.boxFoto}></View>
					<View style={styles.wrapIconCamera}>
						<MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
					</View>
				</View>

				<Text style={styles.labelBoxFoto}>Завантажте фото</Text>
				<View style={styles.form}>
					<TextInput
						value={name}
						style={styles.input}
						onChangeText={text => setName(text.trim())}
						placeholder="Назва..."
					/>
					<TextInput
						value={location}
						style={[styles.input, styles.inputTab]}
						onChangeText={text => setLocation(text.trim())}
						placeholder="Місцевість..."
					/>
					<Feather name="map-pin" size={24} style={styles.mapIcon} color="#BDBDBD" />
				</View>
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnText}>Опубліковати</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.wrapBtnDelete}>
					<Feather name="trash-2" size={22} color="#BDBDBD" />
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: "#ffffff",
	},

	wrapBoxFoto: {
		marginTop: 32,
		marginBottom: 8,
	},

	boxFoto: {
		height: 240,
		borderWidth: 1,
		borderColor: "#BDBDBD",
		borderRadius: 8,
		backgroundColor: "#E8E8E8",
	},

	wrapIconCamera: {
		position: "absolute",
		bottom: 100,
		width: 60,
		height: 60,
		borderRadius: 100,
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},

	labelBoxFoto: {
		fontSize: 16,
		lineHeight: 18.75,
		color: "#BDBDBD",
	},

	form: {
		display: "flex",
		gap: 16,
		marginTop: 32,
		marginBottom: 32,
	},

	input: {
		height: 50,
		borderBottomColor: "#BDBDBD",
		borderBottomWidth: 1,
		fontSize: 16,
		lineHeight: 18.75,
		color: "#212121",
	},

	inputTab: {
		paddingLeft: 28,
	},

	btn: {
		height: 51,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F6F6F6",
		borderRadius: 100,
	},

	btnActive: {
		backgroundColor: "#FF6C00",
	},

	btnText: {
		fontSize: 16,
		color: "#BDBDBD",
	},

	btnTextActive: {
		color: "#ffffff",
	},

	mapIcon: {
		position: "absolute",
		left: 0,
		bottom: 25,
	},

	wrapBtnDelete: {
		width: 70,
		height: 40,
		marginTop: "auto",
		marginBottom: 32,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 100,
		backgroundColor: "#F6F6F6",
	},
});
