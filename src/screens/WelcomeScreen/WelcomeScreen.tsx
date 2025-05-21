import React from "react";
import { View, Image } from "react-native";
import styles from './WelcomeScreen.styles';

const WelcomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Escodeve-logo.png')} />
        </View>
    );
};

export default WelcomeScreen;