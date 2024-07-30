import { Link, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        {/* <Link href={"/Login/LogInScreen"}>"Go To login screen"</Link> */}
        {/* <TouchableOpacity onPress={()=>{router.push({
          pathname: "/Login/LogInScreen",
          params: {Name: "Kuldeep", Age: 29}
          })}} style={{width: 150, height: 50, borderRadius: 10, justifyContent:"center", alignItems:"center", backgroundColor:"green"}}>
          <Text>Log In</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
