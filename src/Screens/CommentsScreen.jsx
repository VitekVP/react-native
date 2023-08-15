import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = () => {
	const [comment, setComment] = useState("");
	const [activeInput, setActiveInput] = useState("");

	const handleFocus = name => {
		Keyboard.dismiss;
		setActiveInput(name);
	};

	const handleBlur = () => {
		setActiveInput("");
	};

	const handleCreatеComment = () => {
		Keyboard.dismiss;

		const newComment = {
			comment,
		};

		console.log(newComment);

		setComment("");
	};

	return (
		<>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				keyboardVerticalOffset={-106}
			>
				<View style={styles.fotoWrap}></View>
				<Text></Text>
				<View>
					<TextInput
						value={comment}
						style={[styles.input, activeInput === "comment" && styles.inputActive]}
						onFocus={() => handleFocus("comment")}
						onBlur={handleBlur}
						onChangeText={text => setComment(text)}
						placeholder="Коментувати..."
					/>
					<TouchableOpacity style={styles.btn} onPress={handleCreatеComment}>
						<AntDesign name="arrowup" size={22} color="#FFFFFF" />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default CommentsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingHorizontal: 16,
		paddingTop: 32,
		paddingBottom: 16,
		justifyContent: "space-between",
	},

	fotoWrap: {
		height: 240,
		marginBottom: 8,
		backgroundColor: "#E8E8E8",
		borderRadius: 8,
		overflow: "hidden",
	},

	input: {
		height: 50,
		width: "100%",
		paddingLeft: 16,
		borderColor: "#BDBDBD",
		borderWidth: 1,
		borderRadius: 100,
		backgroundColor: "#E8E8E8",
		fontSize: 16,
		lineHeight: 19.36,
		color: "#212121",
	},

	inputActive: {
		borderColor: "#FF6C00",
		backgroundColor: "#FFFFFF",
	},

	btn: {
		position: "absolute",
		right: 8,
		bottom: 8,
		width: 34,
		height: 34,
		borderRadius: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FF6C00",
	},
});
