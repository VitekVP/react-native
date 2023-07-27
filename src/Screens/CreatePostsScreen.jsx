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
	ScrollView,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [activeInput, setActiveInput] = useState("");

	const handleFocus = name => {
		setActiveInput(name);
	};

	const handleBlur = () => {
		setActiveInput("");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				// keyboardVerticalOffset={-270}
			>
				<ScrollView contentContainerStyle={styles.scrollContent}>
					<View>
						<View style={styles.boxFoto}></View>
						<View style={styles.wrapIconCamera}>
							<MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
						</View>
						<Text style={styles.labelBoxFoto}>Завантажте фото</Text>
					</View>
					<View style={styles.form}>
						<TextInput
							value={name}
							style={[styles.input, activeInput === "caption" && styles.inputActive]}
							onFocus={() => handleFocus("caption")}
							onBlur={handleBlur}
							onChangeText={text => setName(text.trim())}
							placeholder="Назва..."
						/>
						<TextInput
							value={location}
							style={[styles.input, styles.inputTab, activeInput === "location" && styles.inputActive]}
							onFocus={() => handleFocus("location")}
							onBlur={handleBlur}
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
				</ScrollView>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingTop: 32,
		paddingBottom: 34,
		backgroundColor: "#ffffff",
	},

	scrollContent: {
		flexGrow: 1,
		justifyContent: "space-between",
	},

	boxFoto: {
		height: 240,
		width: "100%",
		borderWidth: 1,
		borderColor: "#BDBDBD",
		borderRadius: 8,
		backgroundColor: "#E8E8E8",
	},

	wrapIconCamera: {
		position: "absolute",
		bottom: 120,
		width: 60,
		height: 60,
		borderRadius: 100,
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},

	labelBoxFoto: {
		marginTop: 8,
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
		width: "100%",
		borderBottomColor: "#BDBDBD",
		borderBottomWidth: 1,
		fontSize: 16,
		lineHeight: 18.75,
		color: "#212121",
	},

	inputActive: {
		borderBottomColor: "#FF6C00",
	},

	inputTab: {
		paddingLeft: 28,
	},

	btn: {
		height: 51,
		marginBottom: "auto",
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
		marginTop: 32,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 100,
		backgroundColor: "#F6F6F6",
	},
});
