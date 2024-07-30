import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded] = useFonts({
    robotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    robotoBoldItalic: require('../assets/fonts/Roboto-BoldItalic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Consider adding a loading spinner or splash screen here
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.textStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro aut velit officia est adipisci voluptas a, placeat maiores consequatur ipsum accusantium harum sunt ullam enim! Ab maxime consequuntur voluptatum.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'robotoBoldItalic',
    fontSize: 44,
  },
});
