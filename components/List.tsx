import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

type ItemProps = { title: string; subTitle?: string };
type IDataProps = { title: string; id: string; subTitle: string };
type IListProps = { data: Array<IDataProps> };

const Item = ({ title, subTitle }: ItemProps) => (
	<View style={styles.itemContainer}>
		<Text style={styles.titleText}>{title}</Text>
		<Text style={styles.subtitleText}>{subTitle}</Text>
	</View>
);

const List = ({ data }: IListProps) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<Item title={item.title} subTitle={item.subTitle} />
			)}
			keyExtractor={item => item.id}
			contentContainerStyle={styles.listContainer}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	itemContainer: {
		backgroundColor: '#fff',
		padding: 16,
		marginVertical: 8,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 5,
		elevation: 3,
	},
	titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	subtitleText: {
		fontSize: 14,
		color: '#555',
		marginTop: 4,
	},
});

export default List;
