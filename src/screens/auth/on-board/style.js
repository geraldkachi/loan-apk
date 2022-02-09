import {StyleSheet} from 'react-native';
import colors from '../../../config/utils/colors';
import {moderateScale, scale} from '../../../config/utils/scaling';

export default StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
  slide: {
    flex: 1,
    //backgroundColor: 'red'
  },
  title: {
    marginTop: 10,
    padding: 20,
    paddingBottom: 10,
    fontSize: moderateScale(25),
    fontFamily: 'Muli-ExtraBold',
    color: colors.black,
  },
  text: {
    fontSize: moderateScale(18),
    padding: 15,
    paddingTop: 0,
  },
  containerText: {
    flex: 1,
    backgroundColor: colors.gray[70],
    //justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  // activeDotStyle: {
  //   backgroundColor: colors.black,
  //   padding: 10,
  //   borderRadius: 10,
  // },
  // dotStyle: {
  //   backgroundColor: colors.accent.portland_orange,
  // },
  navButtonNext: {
    backgroundColor: colors.black,
    borderRadius: 7,
  },
  navButtonDone: {
    backgroundColor: colors.accent.portland_orange,
    borderRadius: 7,
  },
  navButtonSkip: {
    backgroundColor: colors.primary[600],
    borderRadius: 7,
  },


  containerlight: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:colors.black,
  },
  containerdark: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: primaryColors.grayWhite,
    backgroundColor: '#212121',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:colors.black,
  },

  containerTop: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: colors.black,
    justifyContent: 'flex-end',
  },
  containerBottom: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: colors.black,
    justifyContent: 'center',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
  },

  // containerText: {
  //   // flex: 2,
  //   alignItems: 'center',
  // },
  containerButton: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.black,
  },

  button: {
    backgroundColor: colors.black,
    paddingLeft: 20,
    paddingRight: 20,
  },

  buttonText: {
    color: colors.black,
  },

  // image: {
  //   width: null,
  //   height: verticalScale(200),
  //   resizeMode: 'contain',
  //   marginTop: moderateScale(-120),
  // },

  header: {
     color: '#000000',
    fontWeight: 'bold',
    //fontFamily: primaryFont.avenirRoman,
    paddingTop: moderateScale(15),
  },
  subHeader: {
    marginTop: 30,
    paddingLeft: 70,
    paddingRight: 70,
    textAlign: 'center',
    color: colors.black,
  },
  wrapper: {},
  activeDotStyle: {
    backgroundColor:colors.black,
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
  dotStyle: {
    backgroundColor:colors.black,
    width: scale(8),
    height: scale(8),
    borderRadius: scale(6),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
});
