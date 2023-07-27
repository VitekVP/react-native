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
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
	const [activeInput, setActiveInput] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigation = useNavigation();

	const handleFocus = name => {
		setActiveInput(name);
	};
	const handleBlur = () => {
		setActiveInput("");
	};

	const handleShowPassword = () => setShowPassword(!showPassword);

	const handleLogIn = () => {
		// if (email === "" || password === "") {
		// 	return;
		// }

		const formData = { email, password };

		console.log(formData);

		navigation.navigate("BottomTab");

		setEmail("");
		setPassword("");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.wrapper}
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				keyboardVerticalOffset={-273}
			>
				<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
					<View style={styles.boxForm}>
						<Text style={styles.title}>Увійти</Text>
						<View style={styles.form}>
							<TextInput
								value={email}
								style={[styles.input, activeInput === "email" && styles.activeInput]}
								onFocus={() => handleFocus("email")}
								onBlur={handleBlur}
								onChangeText={text => setEmail(text.trim())}
								placeholder="Адреса електронної пошти"
								keyboardType="email-address"
							/>
							<View>
								<TextInput
									value={password}
									style={[styles.input, activeInput === "password" && styles.activeInput]}
									onFocus={() => handleFocus("password")}
									onBlur={handleBlur}
									onChangeText={text => setPassword(text.trim())}
									secureTextEntry={!showPassword}
									placeholder="Пароль"
								/>
								<TouchableOpacity style={styles.formTextWrap} onPress={handleShowPassword}>
									<Text style={styles.formText}>{!showPassword ? "Показати" : "Приховати"}</Text>
								</TouchableOpacity>
							</View>
						</View>
						<TouchableOpacity style={styles.btn} onPress={handleLogIn}>
							<Text style={styles.btnText}>Увійти</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("Registration")}>
							<Text style={styles.textLink}>Немає акаунту? Зареєструватися</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "flex-end",
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
		// height: 489,
		paddingTop: 32,
		paddingRight: 16,
		paddingLeft: 16,
		paddingBottom: 144,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	title: {
		alignSelf: "center",
		marginBottom: 32,
		fontSize: 30,
		fontWeight: 500,
		lineHeight: 35.16,
		color: "#212121",
	},

	form: {
		height: 116,
		marginBottom: 43,
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
		lineHeight: 18.75,
		color: "#212121",
	},

	activeInput: {
		borderColor: "#FF6C00",
		backgroundColor: "#FFFFFF",
	},

	formTextWrap: {
		position: "absolute",
		right: 16,
		top: 12.5,
	},

	formText: {
		color: "#1B4371",
		fontSize: 16,
	},

	btn: {
		height: 51,
		marginBottom: 16,
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
		textAlign: "center",
		fontSize: 16,
		color: "#1B4371",
	},
});
