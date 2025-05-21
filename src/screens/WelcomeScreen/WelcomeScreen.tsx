import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from './WelcomeScreen.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/images/Escodeve-logo.png')} />
            
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Image source={require('../../assets/images/arrow_forward.png')} />
                </TouchableOpacity>
            
            </View>
        </>
    );
};

export default WelcomeScreen;