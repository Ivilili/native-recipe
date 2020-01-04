import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Text, Image } from 'react-native-elements';

export default class RecipeDetails extends Component {
	render() {
		const { navigation } = this.props;
		const ingredients = this.props.navigation.state.params.ingredients;

		return (
			<View style={styles.container}>
				<Image source={{ uri: navigation.getParam('image') }} style={{ width: '100%', height: 300 }} />
				<Card style={styles.card}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						<View>
							<Text h5 style={styles.title}>
								{navigation.getParam('title')}
							</Text>
						</View>

						<View>
							<Icon
								name="bowl"
								type="entypo"
								size={30}
								color="rgb(64, 72, 73)"
								onPress={() => {
									this.props.navigation.push('RecipeList');
								}}
							/>
							<Text h4 style={styles.subtitle}>
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
		flex: 1
	},
	title: {
		fontSize: 22,
		padding: 10,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		textAlign: 'center',
		fontFamily: 'Palatino',
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
	},
	card: {
		marginBottom: 20,
		flex: 1
	}
});
