import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./LoginScreen.styles";
import TopRightSvg from "../../components/topRightSvg";
import BottomLeftSvg from "../../components/BottomLeftSvg";

const LoginScreen: React.FC = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#EBF4F6' }}>

        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <TopRightSvg />

            {/* Logo */}
            <Image style={styles.logo} source={require('../../assets/images/Escodeve-logo.png')} />

            <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                    
                    {/* Email */}
                    <Text style={styles.label}>Email :</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                    {/* Password */}
                    <Text style={styles.label}>Password :</Text>
                    <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    />
                </View>

                {/* Button */}
                <TouchableHighlight style={styles.loginButton} underlayColor="#3A8BA3">
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableHighlight>
                
                {/* Forgot password.. */}
                <Text style={styles.forgotText}>Forgot your password ?</Text>
            </View>

            <BottomLeftSvg />
        </ScrollView>

    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
