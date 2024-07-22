import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import { ScreenRatio } from './src/utils/ScreenRatio';
import ImageViewer from './src/components/ImageViewer';
import { Images } from './assets/Images';
import CustomButton from './src/components/CustomButton';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import IconButton from './src/components/IconButton';
import CircleButton from './src/components/CircleButton';
import EmojiPicker from './src/components/EmojiPicker';
import EmojiList from './src/components/EmojiList';
import EmojiSticker from './src/components/EmojiSticker';

const { width } = Dimensions.get("screen")


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log("Image Url", result.assets[0].uri)
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true)
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(null)
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <ImageViewer imageUrl={selectedImage ? { uri: selectedImage } : Images.bgImg} />
          {pickedEmoji && <EmojiSticker imageSize={ScreenRatio(5)} stickerSource={pickedEmoji} />}
        </View>
        {
          showAppOptions ?
            <View style={styles.optionsContainer}>
              <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" size={ScreenRatio(2.5)} onPress={onReset} />
                <CircleButton onPress={onAddSticker} size={ScreenRatio(4)} />
                <IconButton icon="save-alt" label="Save" size={ScreenRatio(2.5)} onPress={onSaveImageAsync} />
              </View>
            </View> :
            <View>
              <CustomButton title='Choose From Gallery' style={{ marginTop: ScreenRatio(3) }} onPress={pickImageAsync} />
              <CustomButton title='Use This Photo' style={{ marginTop: ScreenRatio(3) }} onPress={() => setShowAppOptions(true)} />
            </View>
        }
      </View>
      <EmojiPicker isVisible={isModalVisible} modalLabel='Choose a sticker' onClose={onModalClose} size={ScreenRatio(2.5)}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingHorizontal: ScreenRatio(3),
    marginTop: ScreenRatio(2)
  },
  imageContainer: {
    flex: 1,
    marginTop: ScreenRatio(10),
  },
  image: {
    width: width - 100,
    height: ScreenRatio(50),
    borderRadius: ScreenRatio(2),
    resizeMode: "contain"
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
    width: width,
    alignItems: "center"
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});