import Ionicons from "@expo/vector-icons/Ionicons"; // including icons for bottom navigation tab
import { Tabs } from "expo-router"; // it includes tab componenta

export default function TabLayout() {
  return (
    // it will change the color to yellow once its active
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: { backgroundColor: "#25292e" },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#25292e" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // once the tab is clicked , it will pass the color declared in 'tabBarActiveTintColor' and focus details to this section . it will react based on this code
          tabBarIcon: ({ color, focused }) => (
            //set icon properties
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
