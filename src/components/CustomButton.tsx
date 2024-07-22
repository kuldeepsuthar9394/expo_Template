import { useMemo } from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { ScreenRatio } from '../utils/ScreenRatio'

interface CustomButtonProps {
    title: string
    onPress: () => void
    style?: ViewStyle,
    textStyle?: TextStyle
}

const CustomButton: React.FC<CustomButtonProps> = (Props) => {

    const { title, onPress, style, textStyle } = Props

    const combinedButtonStyle = useMemo(() => [styles.buttonCon, style], [style]);
    const combinedTextStyle = useMemo(() => [styles.buttonText, textStyle], [textStyle]);

    return (
        <TouchableOpacity onPress={onPress} style={combinedButtonStyle}>
            <Text style={combinedTextStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonCon: {
        height: ScreenRatio(5.5),
        width: "100%",
        backgroundColor: "green",
        borderRadius: ScreenRatio(0.5),
        justifyContent:"center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: ScreenRatio(1.8),
        fontWeight: "600",
        color: "white"
    }
})