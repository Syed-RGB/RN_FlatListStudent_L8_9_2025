import { Stack } from "expo-router";

export default function RootLayout() {
  
  // Remove default header -- https://stackoverflow.com/questions/77482889/how-do-i-get-rid-of-the-default-index-header-that-shows-up-on-my-react-native
  return <Stack
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
  </Stack>;
}

