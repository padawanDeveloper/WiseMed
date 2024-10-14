import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Sentry from '@sentry/react-native';

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Ionicons size={310} name="code-slash" style={styles.headerImage} />
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Sentry</ThemedText>
			</ThemedView>
			<ThemedText>
				Esta sección esta dirigida al manejo de errores con Sentri.io
			</ThemedText>
			<Button
				title="Capturar excepción"
				onPress={() => Sentry.captureException(new Error('My first exception'))}
			/>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
