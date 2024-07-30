import React, { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable, ImageSourcePropType } from 'react-native';
import { Images } from '../../assets/Images';
import { ScreenRatio } from '../utils/ScreenRatio';

interface EmojiListProps {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
}

interface RenderItemProps {
  item: ImageSourcePropType;
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
}

const RenderItem: React.FC<RenderItemProps> = ({ item, onSelect, onCloseModal }) => {
  return (
    <Pressable
      onPress={() => {
        onSelect(item);
        onCloseModal();
      }}
    >
      <Image source={item} style={styles.image} />
    </Pressable>
  );
};

const EmojiList: React.FC<EmojiListProps> = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState<ImageSourcePropType[]>([
    Images.emoji1,
    Images.emoji2,
    Images.emoji3,
    Images.emoji4,
    Images.emoji5,
    Images.emoji6,
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <RenderItem item={item} onSelect={onSelect} onCloseModal={onCloseModal} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: ScreenRatio(1),
    borderTopLeftRadius: ScreenRatio(1),
    paddingHorizontal: ScreenRatio(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: ScreenRatio(12),
    height: ScreenRatio(12),
    marginRight: ScreenRatio(2),
  },
});

export default EmojiList;
