// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="(tabs)"
//         options={{ headerShown: false }} // hide stack header wrapping tabs
//       />
//     </Stack>
//   );
// }

import { Stack } from 'expo-router';
<<<<<<< HEAD
=======
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

// Keep the splash screen visible briefly
SplashScreen.preventAutoHideAsync();
>>>>>>> 34af9f6986769a1bd9a5110ed9a36b972e3201ad

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after a short delay
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
<<<<<<< HEAD
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }} // Hides the stack header that wraps the tabs
      />
    </Stack>
=======
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="loadingscreen" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthProvider>
>>>>>>> 34af9f6986769a1bd9a5110ed9a36b972e3201ad
  );
}