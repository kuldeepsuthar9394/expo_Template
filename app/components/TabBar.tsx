import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScreenRatio } from '../utils/ScreenRatio';
import { Images } from '../../assets/Images';

export function TabBar({ state, descriptors, navigation }) {

    const icon = {
        "index": (props: any) => (<Image source={Images.home} resizeMode="contain" style={[styles.imgSty, {tintColor: props.tintColor, height: props.height, width: props.width}]} />),
        "Profile/ProfileScreen": (props: any) => (<Image source={Images.profile} resizeMode="contain" style={[styles.imgSty, {tintColor: props.tintColor, height: props.height, width: props.width}]} />),
        "Settings/SettingScreen": (props: any) => (<Image source={Images.chart} resizeMode="contain" style={[styles.imgSty, {tintColor: props.tintColor, height: props.height, width: props.width}]} />),
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route: { key: string | number; name: any; params: any; }, index: any) => {
                console.log("name", icon[route.name], route.name)
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabBarItem}
                    >
                        {icon[route.name] && icon[route.name]({
                            tintColor: isFocused ? '#673ab7' : '#222',
                            height: isFocused ? ScreenRatio(3.3) : ScreenRatio(2.5),
                            width: isFocused ? ScreenRatio(3.3) : ScreenRatio(2.5),
                        })}
                        <Text style={{ color: isFocused ? '#673ab7' : '#222', fontSize: isFocused ? ScreenRatio(1.8) : ScreenRatio(1.6), fontWeight: isFocused ? "500" : "400" }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: ScreenRatio(4),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: ScreenRatio(6),
        paddingVertical: ScreenRatio(1.5),
        borderRadius: ScreenRatio(50),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: ScreenRatio(1) },
        shadowRadius: ScreenRatio(1),
        shadowOpacity: 0.2
    },
    tabBarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgSty: {
        height: ScreenRatio(2.5),
        width: ScreenRatio(2.5),
        marginBottom: ScreenRatio(0.5)
    }
})
