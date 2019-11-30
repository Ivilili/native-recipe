import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Link } from 'react-router-native';

export default class RecipeDetails extends Component {
	render() {
		const { image, recipe, ingredients } = this.props.location.state;
		return (
			// implemented without image with header
			<Card title="CARD WITH DIVIDER">
				<Text>Ingredients</Text>
				{ingredients.map((u, i) => {
					return (
						<View key={i}>
							<Image style={styles.image} resizeMode="cover" />
							<Text style={styles.name}>Name</Text>
						</View>
					);
				})}
			</Card>
		);
	}
}
