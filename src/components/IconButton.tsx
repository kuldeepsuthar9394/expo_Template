import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useMemo } from 'react';
import { ScreenRatio } from '../utils/ScreenRatio';

interface IconButtonProps {
    onPress: () => void
    style?: ViewStyle,
    textStyle?: TextStyle,
    icon: any
    label: string,
    size: number
}

const IconButton: React.FC<IconButtonProps> = (Props) => {
    const { icon, label, onPress, style, textStyle, size } = Props
    const combinedButtonConStyle = useMemo(() => [styles.iconButton, style], [style]);
    const combinedLabelStyle = useMemo(() => [styles.iconButtonLabel, textStyle], [textStyle]);
  return (
    <Pressable style={combinedButtonConStyle} onPress={onPress}>
      <MaterialIcons name={icon} size={size} color="#fff" />
      <Text style={combinedLabelStyle}>{label}</Text>
    </Pressable>
  );
}

export default IconButton

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: ScreenRatio(1.5),
  },
});
