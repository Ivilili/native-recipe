import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native';
//import { Link } from 'react-router-native';

export default function Recipe({ recipes, handleDetails, value, handleSubmit, handleChange, error, isLoading }) {
	return (
		<View style={styles.container}>
			<Text>Render the recipe </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'gray'
	}
});
