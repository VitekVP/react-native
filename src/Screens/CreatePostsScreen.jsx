import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
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
	ImageBackground,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const CreatePostsScreen = () => {
	const [namePost, setNamePost] = useState("");
	const [locationPost, setLocationPost] = useState("");
	const [activeInput, setActiveInput] = useState("");
	const navigation = useNavigation();

	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [fotoPost, setFotoPost] = useState("");
	const cameraRef = useRef();
	const [location, setLocation] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
		return handleReset;
	}, []);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				console.log("Permission to access location was denied");
			}
			let location = await Location.getCurrentPositionAsync({});
			const coords = {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			};
			setLocation(coords);
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const handleFocus = namePost => {
		setActiveInput(namePost);
	};

	const handleBlur = () => {
		setActiveInput("");
	};

	const handleSubmit = () => {
		const post = {
			title: namePost,
			location: locationPost,
			foto: fotoPost,
			locationData: location,
		};
		console.log(post);
		handleReset();
		navigation.navigate("Posts");
	};

	const handleReset = () => {
		setNamePost("");
		setLocationPost("");
		setFotoPost("");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				// keyboardVerticalOffset={-270}
			>
				<ScrollView contentContainerStyle={styles.scrollContent}>
					<View style={styles.boxImage}>
						<View style={styles.boxFoto}>
							{!fotoPost ? (
								<Camera style={styles.camera} type={type} ref={cameraRef} />
							) : (
								<ImageBackground source={{ uri: fotoPost }} style={styles.foto} />
							)}
						</View>
						<TouchableOpacity
							style={styles.wrapIconCamera}
							disabled={fotoPost ? true : false}
							onPress={async () => {
								if (cameraRef) {
									const { uri } = await cameraRef.current.takePictureAsync();
									await MediaLibrary.createAssetAsync(uri);
									setFotoPost(uri);
								}
							}}
						>
							<MaterialIcons name="camera-alt" size={24} color="#FFFFFF" />
						</TouchableOpacity>
						<Text style={styles.labelBoxFoto}>{!fotoPost ? "Завантажте фото" : "Редагувати фото"}</Text>
					</View>
					<View style={styles.form}>
						<TextInput
							value={namePost}
							style={[styles.input, activeInput === "caption" && styles.inputActive]}
							onFocus={() => handleFocus("caption")}
							onBlur={handleBlur}
							onChangeText={text => setNamePost(text.trim())}
							placeholder="Назва..."
						/>
						<TextInput
							value={locationPost}
							style={[styles.input, styles.inputTab, activeInput === "locationPost" && styles.inputActive]}
							onFocus={() => handleFocus("locationPost")}
							onBlur={handleBlur}
							onChangeText={text => setLocationPost(text.trim())}
							placeholder="Місцевість..."
						/>
						<Feather name="map-pin" size={24} style={styles.mapIcon} color="#BDBDBD" />
					</View>
					<TouchableOpacity
						style={[styles.btn, fotoPost && styles.btnActive]}
						disabled={!fotoPost}
						onPress={handleSubmit}
					>
						<Text style={[styles.btnText, fotoPost && styles.btnTextActive]}> Опубліковати</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.wrapBtnDelete} onPress={handleReset}>
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
		// paddingTop: 32,
		paddingBottom: 34,
		backgroundColor: "#ffffff",
	},

	scrollContent: {
		flexGrow: 1,
		justifyContent: "space-between",
	},

	boxImage: {
		paddingTop: 32,
	},

	boxFoto: {
		height: 240,
		width: "100%",
		borderWidth: 1,
		borderColor: "#BDBDBD",
		borderRadius: 8,
		backgroundColor: "#E8E8E8",
		overflow: "hidden",
	},

	camera: { flex: 1 },

	foto: {
		flex: 1,
	},

	wrapIconCamera: {
		position: "absolute",
		bottom: 120,
		width: 60,
		height: 60,
		borderRadius: 100,
		backgroundColor: "#ffffff4d",
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
