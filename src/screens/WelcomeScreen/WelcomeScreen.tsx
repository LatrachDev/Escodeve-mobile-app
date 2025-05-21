import React from "react";
import { View, Image } from "react-native";
import styles from './WelcomeScreen.styles';

const WelcomeScreen: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/images/Escodeve-logo.png')} />
            
                <View style={styles.button}>
                    <Image source={require('../../assets/images/arrow_forward.png')} />
                </View>
            
            </View>
        </>
    );
};

export default WelcomeScreen;