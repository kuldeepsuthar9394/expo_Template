import { View, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScreenRatio } from '../utils/ScreenRatio';
import { useMemo } from 'react';

interface CircleButtonProps {
    onPress: () => void
    style?: ViewStyle,
    btnStyle?: ViewStyle
    size: number
}

const CircleButton: React.FC<CircleButtonProps> = (Props) => {
    const { onPress, style, btnStyle, size } = Props

    const combinedButtonConStyle = useMemo(() => [styles.circleButtonContainer, style], [style]);
    const combinedIconStyle = useMemo(() => [styles.circleButton, btnStyle], [btnStyle]);

    return (
        <View style={combinedButtonConStyle}>
          <Pressable style={combinedIconStyle} onPress={onPress}>
            <MaterialIcons name="add" size={size} color="#25292e" />
          </Pressable>
        </View>
      );
}

export default CircleButton

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: ScreenRatio(8),
        height: ScreenRatio(8),
        marginHorizontal: ScreenRatio(6),
        borderWidth: ScreenRatio(0.5),
        borderColor: '#ffd33d',
        borderRadius: ScreenRatio(8),
        padding: 3,
      },
      circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ScreenRatio(8),
        backgroundColor: '#fff',
      },
})