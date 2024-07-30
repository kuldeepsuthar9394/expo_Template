import React, { useMemo } from 'react';
import { View, Image, ImageSourcePropType, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import { ScreenRatio } from '../utils/ScreenRatio';

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSourcePropType;
}

const EmojiSticker: React.FC<EmojiStickerProps> = (Props) => {

  const { imageSize, stickerSource } = Props

  const iconStyle = useMemo(() => [styles.image, {height : imageSize, width: imageSize}], [imageSize]);
  return (
    <View style={styles.container}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={iconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: ScreenRatio(-45),
  } as ViewStyle,
  image: {
    resizeMode: 'contain',
  } as ImageStyle,
});

export default EmojiSticker;
