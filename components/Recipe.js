import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Recipe extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text> Recipe</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'gray'
	},
	card: {
		marginTop: 200,
		alignItems: 'center'
	}
});
