import React from "react";
import { View, Text } from "react-native";
import styles from "./HomeScreen.styles";

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
    </View>
  );
};



export default HomeScreen;