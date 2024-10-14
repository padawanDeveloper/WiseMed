import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import * as Sentry from '@sentry/react-native';

Sentry.init({
	dsn: 'https://ba5b9d7969fb90b9ebe13b25f48afdf1@o4508123183644672.ingest.us.sentry.io/4508123185741824',
	// Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
	// We recommend adjusting this value in production.
	tracesSampleRate: 1.0,
	_experiments: {
		// profilesSampleRate is relative to tracesSampleRate.
		// Here, we'll capture profiles for 100% of transactions.
		profilesSampleRate: 1.0,
	},
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}

export default Sentry.wrap(RootLayout);
