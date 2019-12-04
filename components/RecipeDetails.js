import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class RecipeDetails extends Component {
	render() {
		return (
			// implemented without image with header
			<View style={styles.container}>
				<Card title="CARD WITH DIVIDER">
					<Text>Ingredients</Text>

					<View>
						<Text>Name</Text>
					</View>
				</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
