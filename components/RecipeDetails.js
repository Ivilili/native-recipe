import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements';

export default class RecipeDetails extends Component {
	render() {
		const { navigation } = this.props;
		const ingredients = this.props.navigation.state.params.ingredients;

		return (
			<View style={styles.container}>
				<Card image={{ uri: navigation.getParam('image') }} imageStyle={{ width: '100%', height: 300 }}>
					<ScrollView>
						<View>
							<Text h5 style={styles.title}>
								{navigation.getParam('title')}
							</Text>
						</View>

						<View>
							<Text h3 style={styles.subtitle}>
								Ingredients
							</Text>
							{ingredients.map((item, index) => {
								return (
									<ListItem key={index} titleStyle={styles.list} title={item.text} bottomDivider />
								);
							})}
						</View>
					</ScrollView>
				</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		textAlign: 'center',
		fontFamily: 'Zapfino',
		color: 'rgb(64, 72, 73)'
	},
	subtitle: {
		fontFamily: 'Palatino',
		fontStyle: 'italic',
		textAlignVertical: 'center',
		textAlign: 'center',
		color: '#bf9b81',
		marginBottom: 20
	},
	list: {
		fontFamily: 'Palatino',
		fontStyle: 'italic'
	}
});
