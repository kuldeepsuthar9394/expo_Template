import { Platform, StatusBar, Dimensions, } from "react-native";
const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;

// check is iPhone X method
export const isIphoneX = () => {
  const dim = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    ((dim.height === 812 || dim.width === 812) || (dim.height === 896 || dim.width === 896))
  );
}

const statusBarHeight:any = StatusBar.currentHeight

// device height method
const deviceHeight = isIphoneX()
  ? standardLength - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === "android"
    ? standardLength - statusBarHeight
    : standardLength;

// screen ratio 
export function ScreenRatio(percent:any) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
