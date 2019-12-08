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

import { List, ListItem, SearchBar } from 'react-native-elements';

export default class Home extends Component {
	render() {
		return (
			<ImageBackground
				source={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }}
				style={{ width: '100%', height: '100%' }}
			>
				<View style={styles.container}>
					<Text style={styles.baseText}>Find a recipe</Text>
					<Button
						color="rgb(64, 72, 73)"
						title="Recipes"
						onPress={() => this.props.navigation.navigate('RecipeList')}
					/>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	baseText: {
		fontSize: 46,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		textAlign: 'center',
		fontFamily: 'Zapfino',
		color: 'rgb(64, 72, 73)'
	}
});
