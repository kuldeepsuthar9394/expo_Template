import React, {ReactNode} from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScreenRatio } from '../utils/ScreenRatio';

interface EmojiPickerProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  size: number;
  modalLabel: string
}

const EmojiPicker: React.FC<EmojiPickerProps> = (Props) => {
  const { isVisible, onClose, children, size, modalLabel } = Props
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{modalLabel}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={size} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: ScreenRatio(25),
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: ScreenRatio(2),
    borderTopLeftRadius: ScreenRatio(2),
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: ScreenRatio(4),
    backgroundColor: '#464C55',
    borderTopRightRadius: ScreenRatio(1),
    borderTopLeftRadius: ScreenRatio(1),
    paddingHorizontal: ScreenRatio(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: ScreenRatio(2),
  },
});

export default EmojiPicker;
