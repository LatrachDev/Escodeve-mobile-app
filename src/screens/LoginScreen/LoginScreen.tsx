import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./LoginScreen.styles";

const LoginScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo} 
                source={require('../../assets/images/Escodeve-logo.png')} 
            />

            <View style={styles.inputContainer}>
                {/* Email */}
                <Text style={styles.label}>Email :</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="email-address"
                />

                {/* Password */}
                <Text style={styles.label}>Password :</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.forgotText}>Forgot your code pin ?</Text>

        </View>
    );
};

export default LoginScreen;
