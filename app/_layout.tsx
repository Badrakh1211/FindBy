import { Stack } from 'expo-router';
import React from 'react';

const RootLayoutNav: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="posts/main" options={{headerShown: false}}  />
    </Stack>
  );
};

export default RootLayoutNav;
