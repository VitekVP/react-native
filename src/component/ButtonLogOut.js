import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonLogOut = ({ style }) => {
	const navigation = useNavigation();

	return <Feather name="log-out" size={24} style={style} onPress={() => navigation.navigate("Login")} />;
};

export default ButtonLogOut;
