import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
//import { SearchBar } from 'react-native-elements';
//import { Link } from 'react-router-native';

import RecipeList from './components/RecipeList';

const APP_ID = 'adaa83af';
const APP_KEY = '7d25fa4bcf6fd1cd5502176b4c2565ae';

export default class App extends Component {
	state = {
		isLoading: false,
		recipes: [],
		query: 'chicken',
		search: '',
		error: null
	};
	componentDidMount() {
		this.getRecipes();
	}

	async getRecipes() {
		const { query } = this.state;
		this.setState({ isLoading: true });

		const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const jsonData = await data.json();

		if (jsonData.hits.length === undefined) {
			this.setState(() => {
				return {
					error: 'No results, try again'
				};
			});
		} else {
			this.setState(() => {
				return { recipes: jsonData.hits };
			});
			console.log(this.state.recipes);
		}
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { search } = this.state;
		this.setState(
			() => {
				return {
					query: search
				};
			},
			() => {
				this.getRecipes();
			}
		);
	};
	render() {
		console.log(this.state.recipes);
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ImageBackground
					source={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }}
					style={{ width: '100%', height: '100%' }}
				>
					<View>
						<RecipeList
							recipes={this.state.recipes}
							value={this.state.search}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							error={this.state.error}
						/>
					</View>
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
	containerTextInput: {
		marginTop: 10,
		justifyContent: 'center'
	},
	searchInput: {
		paddingLeft: 10,
		height: 70,
		fontSize: 26,
		margin: 50,
		marginTop: 0,
		color: 'rgb(64, 72, 73)',
		backgroundColor: 'transparent',
		borderBottomColor: 'rgb(64, 72, 73)',
		borderBottomWidth: 2
	},
	baseText: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		textAlign: 'center',
		marginTop: 260,
		fontFamily: 'Zapfino',
		color: 'rgb(64, 72, 73)'
	}
});
