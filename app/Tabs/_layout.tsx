import { Tabs } from "expo-router"
import { Image } from "react-native";
import { Images } from "../../assets/Images";
import { TabBar } from "../components/TabBar";

const RootLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="index" options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarLabelStyle: { fontSize: 14 },
                tabBarIcon: () => <Image source={Images.home} resizeMode="contain" style={{ height: 25, width: 25, tintColor: "green" }} />
            }} />
            <Tabs.Screen name="Profile/ProfileScreen" options={{
                headerShown: false,
                tabBarLabel: "Profile",
                tabBarLabelStyle: { fontSize: 14 },
                tabBarIcon: () => <Image source={Images.profile} resizeMode="contain" style={{ height: 25, width: 25, tintColor: "green" }} />
            }} />
            <Tabs.Screen name="Settings/SettingScreen" options={{
                headerShown: false,
                tabBarLabel: "Setting",
                tabBarLabelStyle: { fontSize: 14 },
                tabBarIcon: () => <Image source={Images.profile} resizeMode="contain" style={{ height: 25, width: 25, tintColor: "green" }} />
            }} />
        </Tabs>
    )
}

export default RootLayout;