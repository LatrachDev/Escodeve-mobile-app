import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF4F6',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20, // for slight horizontal spacing
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40, // space between logo and button
    },
    button: {
        backgroundColor: '#58BECA',
        marginTop: '30%',
        width: '70%',
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        borderRadius: 10,
    }
})

export default styles