import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type ISpinnerProps = {
	size?: number | 'large' | 'small' | undefined;
};

const Spinner = ({ size = 'large' }: ISpinnerProps) => {
	const colorScheme = useColorScheme();
	return (
		<View style={styles.container}>
			<ActivityIndicator
				size={size}
				color={Colors[colorScheme ?? 'light'].tint}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Spinner;
