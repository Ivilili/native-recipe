import React from 'react';
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';

export default function Search({ value, handleSubmit, handleChange }) {
	return (
		<View style={styles.containerTextInput}>
			<Text style={styles.baseText}>Find a recipe</Text>
			<TextInput
				style={styles.searchInput}
				onChangeText={this.handleChange}
				value={value}
				placeholderTextColor="rgb(128,128,128)"
				placeholder="Search..."
			/>
		</View>
	);
}

const styles = StyleSheet.create({
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
