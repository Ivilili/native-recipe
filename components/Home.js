import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import { SearchBar } from 'react-native-elements';
import Search from './Search';
import RecipeList from './RecipeList';

export default class Home extends Component {
	state = {
		search: ''
	};

	handleChange = (e) => {
		this.setState({
			search: e.target.value
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
						<Search />
						<Button title="Go to Details" onPress={() => this.props.navigation.navigate('RecipeDetails')} />
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
