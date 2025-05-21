import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#2A2A32',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#2A2A32',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  loginButton: {
    backgroundColor: '#58BECA',
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    marginTop: 15,
    color: '#A9A3A3',
    fontFamily: 'Inter_18-SemiBold',
    fontSize: 14,
  },
  bottomShape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default styles;
