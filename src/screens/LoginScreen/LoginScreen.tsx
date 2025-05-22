import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import styles from "./LoginScreen.styles";
import TopRightSvg from "../../components/topRightSvg";
import BottomLeftSvg from "../../components/BottomLeftSvg";

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [CredentialsError, setCredentialsError] = useState("");

  const myEmail = "latrach@gmail.com";
  const myPassword = "Latrach123";

  // email validation
  const vallidateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const onLoginClick = () => {

    if (!email) {
      setEmailError('Email is required');
    } else if (!vallidateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }


    if (email === myEmail && password === myPassword) {
      navigation.replace("Home");
    } else if (email && password) {
      setCredentialsError('Invalid credentials');
    } else {
      setCredentialsError('');
    }
  }



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
                      style={[styles.input, emailError && styles.inputError]}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="Enter your email"
                      placeholderTextColor="rgba(0, 0, 0, 0.2)"
                    />
                    {/* show the email validation.. */}
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                    {/* Password */}
                    <Text style={styles.label}>Password :</Text>
                    <TextInput
                      style={[styles.input, passwordError && styles.inputError]}
                      secureTextEntry
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Enter your password"
                      placeholderTextColor="rgba(0, 0, 0, 0.2)"
                    />
                    {/* show the password validation */}
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    {CredentialsError ? <Text style={styles.errorText}>{CredentialsError}</Text> : null}

                </View>

                {/* Button */}
                <TouchableHighlight 
                  style={styles.loginButton} 
                  underlayColor="#3A8BA3"
                  onPress={onLoginClick}
                >
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
