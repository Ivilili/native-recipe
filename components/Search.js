import React from 'react';
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Search({ props }) {
	return (
		<View style={styles.containerTextInput}>
			<Text style={styles.baseText}>Find a recipe</Text>
			<SearchBar
				inputStyle={styles.searchInput}
				inputContainerStyle={{ backgroundColor: 'transparent' }}
				//containerStyle={{ backgroundColor: 'transparent'}}
				onChangeText={(text) => this.handleChange(text)}
				name="search"
				placeholderTextColor="rgb(128,128,128)"
				placeholder="Search..."
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	containerTextInput: {},
	searchInput: {
		fontSize: 24,
		color: 'rgb(64, 72, 73)',
		backgroundColor: 'transparent'
	},
	baseText: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		textAlign: 'center',
		marginTop: 165,
		fontFamily: 'Zapfino',
		color: 'rgb(64, 72, 73)'
	}
});
