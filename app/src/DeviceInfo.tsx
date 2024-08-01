import { Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function DeviceInfo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
      <Text>
        {Device.manufacturer}: {Device.modelName}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.osName}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.osVersion}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.deviceName}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.deviceYearClass}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.manufacturer}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.totalMemory}
      </Text>
      <Text>
        {Device.manufacturer}: {Device.supportedCpuArchitectures}
      </Text>
    </View>
  );
}
