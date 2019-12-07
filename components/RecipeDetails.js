import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class RecipeDetails extends Component {
	render() {
		const { navigation } = this.props;
		const ingredients = this.props.navigation.state.params.ingredients;
		console.log(ingredients);
		return (
			<View>
				<Card image={{ uri: navigation.getParam('image') }}>
					<View style={styles.user}>
						<Text> {navigation.getParam('title')} </Text>
					</View>
					<View>
						<Text>Ingredience</Text>
						{ingredients.map((item, index) => {
							return <ListItem key={index} title={item.text} bottomDivider />;
						})}
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
