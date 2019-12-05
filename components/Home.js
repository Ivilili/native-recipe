import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import { SearchBar } from 'react-native-elements';
import Search from './Search';
import RecipeList from './RecipeList';

export default class Home extends Component {
	state = {
		search: '',
		isLoading: true,
		recipes: []
	};

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
					<View>
						<Text> Home</Text>
						{/*<Search value={this.props.value} onChangeText={this.handleChange} />
						*/}
						<Button
							title="See the Recipes"
							onPress={() => this.props.navigation.navigate('RecipeDetails')}
						/>
						<RecipeList />
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
	}
});
