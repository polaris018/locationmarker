import {Dimensions, Platform} from 'react-native';
let {width, height} = Dimensions.get('window'); //Double

export default {
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  container: {
    //flex: 1,
    paddingHorizontal: 20,
    //   backgroundColor: "#F54E6B"
  },
  logoImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  iconImage: {
    width: 22,
    height: 23,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  spinnerContainer: {
    position: 'absolute',
    bottom: height / 2 - 60,
    left: 0,
    right: 0,
  },
  contentTitle: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25,
  },

  signUpText: {
    marginTop: 20,
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  phone_input: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 1
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2
  },
  topContainer: {
    // position: 'absolute',
    //backgroundColor: '#686868',
    zIndex: 999,
   // justifyContent: 'center',
    width: width - 50,
    height: 40,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
    marginLeft: 30,
    marginTop: 10,
    top: 0,
    flexDirection: 'row',
  },
};
