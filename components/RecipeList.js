import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	ImageBackground,
	KeyboardAvoidingView,
	ScrollView,
	TextInput,
	ActivityIndicator
} from 'react-native';

import { List, ListItem, SearchBar } from 'react-native-elements';

const APP_ID = 'adaa83af';
const APP_KEY = '7d25fa4bcf6fd1cd5502176b4c2565ae';

export default class RecipeList extends Component {
	state = {
		recipes: [],
		search: '',
		isLoading: null,
		query: 'cookie',
		error: null
	};

	async getRecipes() {
		const { query } = this.state;
		this.setState({ isLoading: true });
		try {
			const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
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
		const { search } = this.state;
		this.setState(
			{
				search: text,
				query: search
			},
			() => this.getRecipes()
		);
	};
	componentWillUnmount() {}

	render() {
		const { recipes } = this.state;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ImageBackground
					source={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }}
					style={{ width: '100%', height: '100%' }}
				>
					<ScrollView>
						<SearchBar
							round
							lightTheme
							searchIcon={{ size: 26 }}
							containerStyle={{ marginTop: 40 }}
							onChangeText={(text) => this.handleChange(text)}
							name="search"
							placeholder="Search..."
							value={this.state.search}
						/>

						{this.state.isLoading ? (
							<View style={styles.container}>
								<ActivityIndicator size="large" color="#7d90a0" />
							</View>
						) : (
							<View>
								{recipes.map((item) => {
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
					</ScrollView>
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
