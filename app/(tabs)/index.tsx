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

type IDataProps = {
	id: string;
	title: string;
	subTitle: string;
};

const useFetchData = () => {
	const [loading, setloading] = useState<boolean>(true);
	const [data, setData] = useState<Array<IDataProps>>([]);

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

	return { data, loading };
};

export default function HomeScreen() {
	const { data, loading } = useFetchData();

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
