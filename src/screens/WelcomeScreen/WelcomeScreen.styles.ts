import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebf4f6',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20, 
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40, 
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