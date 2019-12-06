import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, List } from 'react-native';

const RecipeList = ({ recipes, renderRow, isLoading }) => {
	return <View style={styles.container} />;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'gray'
	}
});

export default RecipeList;
