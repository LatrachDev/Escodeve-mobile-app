import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EBF4F6',
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60, 
    paddingBottom: 100, 
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
  },
  inputSection: {
    width: '100%',
    marginTop: 220, 
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
    fontFamily: 'Inter_18pt-SemiBold',
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
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 14,
    textAlign: 'center',
  },
  bottomShape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default styles;
