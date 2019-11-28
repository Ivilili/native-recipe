import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends Component {
	state = {
		search: ''
	};
	updateSearch = (search) => {
		this.setState({ search });
	};
	render() {
		const { search } = this.state;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ImageBackground
					source={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }}
					style={{ width: '100%', height: '100%' }}
				>
					<View style={styles.containerTextInput}>
						<Text>Find a recipe</Text>
						<SearchBar
							style={styles.searchInput}
							onChangeText={this.updateSearch}
							value={search}
							placeholder="Search..."
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
		alignItems: 'center'
	},
	containerTextInput: {
		marginTop: 10,
		justifyContent: 'center'
	},
	searchInput: {
		marginTop: 20
	}
});
