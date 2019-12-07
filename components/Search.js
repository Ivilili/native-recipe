import React from 'react';
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Search({ search }) {
	return (
		<View style={styles.containerTextInput}>
			<Text style={styles.baseText}>Find a recipe</Text>
			<SearchBar
				inputContainerStyle={{ backgroundColor: 'transparent' }}
				containerStyle={{ backgroundColor: 'transparent' }}
				onChangeText={(text) => this.handleChange(text)}
				name="search"
				placeholderTextColor="rgb(64, 72, 73)"
				placeholder="Search..."
				value={search}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
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
