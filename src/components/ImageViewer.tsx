import { StyleSheet, Image, Dimensions, ImageSourcePropType } from 'react-native';
import { ScreenRatio } from '../utils/ScreenRatio';

const {width} = Dimensions.get("screen")

interface ImageViewerProps {
    imageUrl: ImageSourcePropType;
}

const ImageViewer: React.FC<ImageViewerProps> = ({imageUrl}) => {
  return (
    <Image source={imageUrl} style={styles.image} />
  );
}

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: width -100,
    height: ScreenRatio(50),
    borderRadius: ScreenRatio(2),
    resizeMode: "contain"
  },
});
