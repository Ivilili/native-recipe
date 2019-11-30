import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import { Link } from 'react-router-native';

export default class Recipe extends Component {
	render() {
		//const { image, label, calories, healthLabels } = this.props.recipe;
		//const ingredients = this.props.recipe.ingredients;
		return (
			<View style={styles.container}>
				<Card style={styles.card}>
					<ListItem roundAvatar title="title" avatar={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }} />;
				</Card>
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
