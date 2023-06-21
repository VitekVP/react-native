import { useState } from "react";
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
	const [activeInput, setActiveInput] = useState("");

	const handleFocus = name => {
		setActiveInput(name);
	};
	const handleBlur = () => {
		setActiveInput("");
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
				<View style={styles.boxForm}>
					<Text style={styles.title}>Увійти</Text>
					<View style={styles.form}>
						<TextInput
							style={activeInput === "email" ? styles.activeInput : styles.input}
							onFocus={() => handleFocus("email")}
							onBlur={handleBlur}
							placeholder="Адреса електронної пошти"
						/>
						<View>
							<TextInput
								style={activeInput === "password" ? styles.activeInput : styles.input}
								onFocus={() => handleFocus("password")}
								onBlur={handleBlur}
								secureTextEntry={true}
								placeholder="Пароль"
							/>
							<Text style={styles.formText}>Показати</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>Увійти</Text>
					</TouchableOpacity>
					<Text style={styles.textLink}>Немає акаунту? Зареєструватися</Text>
					<View style={styles.indicator}></View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	imageFone: {
		flex: 1,
		justifyContent: "flex-end",
		resizeMode: "cover",
		height: "100%",
		width: "100%",
	},

	boxForm: {
		width: "100%",
		height: 489,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	title: {
		alignSelf: "center",
		marginTop: 32,
		fontSize: 30,
		fontWeight: 500,
		color: "#212121",
	},

	form: {
		height: 116,
		marginTop: 32,
		display: "flex",
		justifyContent: "space-between",
		gap: 16,
	},

	input: {
		height: 50,
		paddingLeft: 16,
		backgroundColor: "#F6F6F6",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		fontSize: 16,
	},

	activeInput: {
		height: 50,
		paddingLeft: 16,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#FF6C00",
		backgroundColor: "#FFFFFF",
		fontSize: 16,
		color: "#212121",
	},

	formText: {
		color: "#1B4371",
		fontSize: 16,
		position: "absolute",
		right: 16,
		top: 12.5,
	},

	btn: {
		height: 51,
		marginTop: 43,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FF6C00",
		borderRadius: 100,
	},

	btnText: {
		fontSize: 16,
		color: "#FFFFFF",
	},

	textLink: {
		marginTop: 16,
		textAlign: "center",
		fontSize: 16,
		color: "#1B4371",
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

export default LoginScreen;
