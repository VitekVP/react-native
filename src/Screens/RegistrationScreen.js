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
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
	const [activeInput, setActiveInput] = useState("");
	const [login, setLogin] = useState("");
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

	const handleRegister = () => {
		if (login === "" || email === "" || password === "") {
			return;
		}

		const formData = { login, email, password };

		console.log(formData);

		navigation.navigate("BottomTab");

		setLogin("");
		setEmail("");
		setPassword("");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.wrapper}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={-203}
			>
				<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
					<View style={styles.fotoWrapp}>
						<View style={styles.addIconWrap}>
							<AntDesign name="pluscircleo" size={25} style={styles.addIcon} />
						</View>
					</View>
					<View style={styles.boxForm}>
						<Text style={styles.title}>Реєстрація</Text>
						<View style={styles.form}>
							<TextInput
								value={login}
								style={[styles.input, activeInput === "login" && styles.activeInput]}
								onFocus={() => handleFocus("login")}
								onBlur={handleBlur}
								onChangeText={text => setLogin(text.trim())}
								placeholder="Логін"
							/>
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
									secureTextEntry={!showPassword}
									onChangeText={text => setPassword(text.trim())}
									placeholder="Пароль"
								/>
								<TouchableOpacity style={styles.formTextWrap} onPress={handleShowPassword}>
									<Text style={styles.formText}>{!showPassword ? "Показати" : "Приховати"}</Text>
								</TouchableOpacity>
							</View>
						</View>
						<TouchableOpacity style={styles.btn} onPress={handleRegister}>
							<Text style={styles.btnText}>Зареєстуватися</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default RegistrationScreen;

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
		// height: 549,
		paddingTop: 92,
		paddingHorizontal: 16,
		paddingBottom: 78,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	title: {
		marginBottom: 32,
		alignSelf: "center",
		fontSize: 30,
		fontWeight: 500,
		color: "#212121",
		lineHeight: 35.16,
	},

	form: {
		display: "flex",
		justifyContent: "space-between",
		gap: 16,
		marginBottom: 43,
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
