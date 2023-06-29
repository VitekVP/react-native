import { useState } from "react";
import {
	StyleSheet,
	ImageBackground,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
	const [activeInput, setActiveInput] = useState("");
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleFocus = name => {
		setActiveInput(name);
	};
	const handleBlur = () => {
		setActiveInput("");
	};

	const handleRegister = () => {
		const formData = { login, email, password };

		console.log(formData);

		setLogin("");
		setEmail("");
		setPassword("");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
				<View style={styles.fotoWrapp}>
					<View style={styles.addIconWrap}>
						<AntDesign name="pluscircleo" size={25} style={styles.addIcon} />
					</View>
				</View>
				<View style={styles.boxForm}>
					<Text style={styles.title}>Реєстрація</Text>
					<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
						<View style={styles.form}>
							<TextInput
								value={login}
								style={activeInput === "login" ? styles.activeInput : styles.input}
								onFocus={() => handleFocus("login")}
								onBlur={handleBlur}
								onChangeText={setLogin}
								placeholder="Логін"
							/>
							<TextInput
								value={email}
								style={activeInput === "email" ? styles.activeInput : styles.input}
								onFocus={() => handleFocus("email")}
								onBlur={handleBlur}
								onChangeText={setEmail}
								placeholder="Адреса електронної пошти"
							/>
							<View>
								<TextInput
									value={password}
									style={activeInput === "password" ? styles.activeInput : styles.input}
									onFocus={() => handleFocus("password")}
									onBlur={handleBlur}
									secureTextEntry={true}
									onChangeText={setPassword}
									placeholder="Пароль"
								/>
								<Text style={styles.formText}>Показати</Text>
							</View>
						</View>
						<TouchableOpacity style={styles.btn} onPress={handleRegister}>
							<Text title="Зареєстуватися" style={styles.btnText}>
								Зареєстуватися
							</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
					<Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
					<View style={styles.indicator}></View>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	imageFone: {
		flex: 1,
		justifyContent: "flex-end",
		resizeMode: "cover",
		height: "100%",
		width: "100%",
	},

	fotoWrapp: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		alignSelf: "center",
		top: 60,
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

	boxForm: {
		width: "100%",
		height: 549,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	title: {
		alignSelf: "center",
		marginTop: 92,
		fontSize: 30,
		fontWeight: 500,
		color: "#212121",
	},

	form: {
		height: 182,
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
