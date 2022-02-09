import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from '../../../config/scaling';
import {primaryColors} from '../../../config/colors';
import {ThemeContext} from '../../../config/util/context';
import {primaryFont} from '../../../config/fonts';

export default StyleSheet.create({
  containerlight: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColors.grayWhite,
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
    backgroundColor: primaryColors.grayWhite,
  },

  containerTop: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: primaryColors.grayWhite,
    justifyContent: 'flex-end',
  },
  containerBottom: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: primaryColors.white,
    justifyContent: 'center',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
  },

  containerText: {
    // flex: 2,
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: primaryColors.white,
  },

  button: {
    backgroundColor: primaryColors.blue,
    paddingLeft: 20,
    paddingRight: 20,
  },

  buttonText: {
    color: primaryColors.blue,
  },

  image: {
    width: null,
    height: verticalScale(200),
    resizeMode: 'contain',
    marginTop: moderateScale(-120),
  },

  header: {
    color: primaryColors.blue,
    fontWeight: 'bold',
    fontFamily: primaryFont.avenirRoman,
    paddingTop: moderateScale(15),
  },
  subHeader: {
    marginTop: 30,
    paddingLeft: 70,
    paddingRight: 70,
    textAlign: 'center',
    color: primaryColors.blue,
  },
  wrapper: {},
  activeDotStyle: {
    backgroundColor: primaryColors.blue,
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
  dotStyle: {
    backgroundColor: primaryColors.lightGray,
    width: scale(8),
    height: scale(8),
    borderRadius: scale(6),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
});
