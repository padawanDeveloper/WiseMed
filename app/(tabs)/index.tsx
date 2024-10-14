import { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import * as Sentry from '@sentry/react-native';

import List from '@/components/List';
import Loading from '@/components/Loading';
import { user } from '@/api';

type IData = {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
};

export default function HomeScreen() {
	const [loading, setloading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		user
			.getUsers()
			.then(({ data }) => {
				setData(
					data.map(({ id, firstname, lastname, email }: IData) => ({
						id: String(id),
						title: `${firstname} ${lastname}`,
						subTitle: email,
					}))
				);
				setloading(false);
			})
			.catch(err => {
				Sentry.captureException(err);
				setloading(false);
			});
	}, []);

	if (loading) return <Loading />;

	return (
		<SafeAreaView style={styles.container}>
			<List data={data} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});
