import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
//import { SearchBar } from 'react-native-elements';

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
						<Text style={styles.baseText}>Find a recipe</Text>
						<TextInput
							style={styles.searchInput}
							onChangeText={this.updateSearch}
							value={search}
							placeholderTextColor="rgb(128,128,128)"
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
