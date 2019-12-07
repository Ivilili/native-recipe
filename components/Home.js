import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	ImageBackground,
	KeyboardAvoidingView,
	TextInput,
	ActivityIndicator
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import Search from './Search';

//const APP_ID = 'adaa83af';
//const APP_KEY = '7d25fa4bcf6fd1cd5502176b4c2565ae';

export default class Home extends Component {
	state = {
		recipes: [],
		search: '',
		isLoading: false,
		name: null,
		query: 'chicken',
		error: null
	};

	componentDidMount() {
		this.getRecipes();
	}

	async getRecipes() {
		this.setState({ isLoading: true });
		try {
			const data = await fetch(
				`https://api.edamam.com/search?q=chicken&app_id=adaa83af&app_key=7d25fa4bcf6fd1cd5502176b4c2565ae`
			);
			const jsonData = await data.json();
			this.setState(() => {
				return {
					recipes: jsonData.hits,
					isLoading: false
				};
			});
		} catch (err) {
			console.log(err);
		}
	}
	componentDidMount() {
		this.getRecipes();
	}

	handleChange = (text) => {
		this.setState({
			search: text
		});
	};

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ImageBackground
					source={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }}
					style={{ width: '100%', height: '100%' }}
				>
					<Search value={this.state.search} onChangeText={this.handleChange} />

					{this.state.isLoading ? (
						<View style={styles.container}>
							<ActivityIndicator size="large" color="#7d90a0" />
						</View>
					) : (
						<View>
							{this.state.recipes.map((item) => {
								return (
									<ListItem
										key={item.recipe.label}
										titleStyle={styles.list}
										leftAvatar={{ source: { uri: item.recipe.image } }}
										title={item.recipe.label}
										subtitle={
											<View>
												<Text style={styles.subtitle}>
													Number of Servings: {item.recipe.yield}
												</Text>
												<Text style={styles.subtitle}>
													Calories: {Math.round(item.recipe.calories)}
												</Text>
											</View>
										}
										bottomDivider
										chevron
										onPress={() =>
											this.props.navigation.navigate('RecipeDetails', {
												title: item.recipe.label,
												image: item.recipe.image,
												ingredients: item.recipe.ingredients
											})}
									/>
								);
							})}
						</View>
					)}
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	list: {
		fontFamily: 'Palatino',
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: 'rgb(64, 72, 73)'
	},
	subtitle: {
		color: '#442e26',
		fontFamily: 'Palatino'
	}
});
