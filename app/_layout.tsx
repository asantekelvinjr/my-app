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

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }} // Hides the stack header that wraps the tabs
      />
    </Stack>
  );
}
