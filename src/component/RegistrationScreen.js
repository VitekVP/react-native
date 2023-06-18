import { useState } from "react";
import { StyleSheet, ImageBackground, View, Text, Image, TextInput } from "react-native";

const RegistrationScreen = () => {
	const [isFocusedLogin, setIsFocusedLogin] = useState(false);
	const [isFocusedEmail, setIsFocusedEmail] = useState(false);
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);

	const handleFocusLogin = () => {
		setIsFocusedLogin(true);
	};
	const handleBlurLogin = () => {
		setIsFocusedLogin(false);
	};

	const handleFocusEmail = () => {
		setIsFocusedEmail(true);
	};
	const handleBlurEmail = () => {
		setIsFocusedEmail(false);
	};

	const handleFocusPassword = () => {
		setIsFocusedPassword(true);
	};
	const handleBlurPassword = () => {
		setIsFocusedPassword(false);
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={require("../../assets/images/fone.png")} style={styles.imageFone}>
				<View style={styles.fotoWrapp}>
					<Image source={require("../../assets/images/add-icon.png")} style={styles.addIcon} />
				</View>
				<View style={styles.boxForm}>
					<Text style={styles.title}>Реєстрація</Text>
					<View style={styles.form}>
						<TextInput
							style={[styles.input, isFocusedLogin ? styles.inputFocused : styles.input]}
							onFocus={handleFocusLogin}
							onBlur={handleBlurLogin}
							placeholder="Логін"
						/>
						<TextInput
							style={[styles.input, isFocusedEmail ? styles.inputFocused : styles.input]}
							onFocus={handleFocusEmail}
							onBlur={handleBlurEmail}
							placeholder="Адреса електронної пошти"
						/>
						<View>
							<TextInput
								style={[styles.input, isFocusedPassword ? styles.inputFocused : styles.input]}
								onFocus={handleFocusPassword}
								onBlur={handleBlurPassword}
								secureTextEntry={true}
								placeholder="Пароль"
							/>
							<Text style={styles.formText}>Показати</Text>
						</View>
					</View>
					<View style={styles.btn}>
						<Text style={styles.btnText}>Зареєстуватися</Text>
					</View>
					<Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
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

	fotoWrapp: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		alignSelf: "center",
		top: 60,
		zIndex: 1,
	},

	addIcon: {
		width: 25,
		height: 25,
		position: "absolute",
		bottom: 14,
		right: -12.5,
		zIndex: 2,
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
		color: "#212121",
	},

	inputFocused: {
		borderWidth: 1,
		borderColor: "#FF6C00",
		backgroundColor: "#FFFFFF",
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

export default RegistrationScreen;
