import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import Recipe from './Recipe';

export default function RecipeList() {
	return (
		<View style={styles.container}>
			{this.props.isLoading ? (
				<View style={styles.container}>
					<ActivityIndicator size="large" color="#ffffff" />
				</View>
			) : null}

			<FlatList
				data={this.props.recipes}
				renderItem={this.renderItem}
				ListEmptyComponent={() => <Text>No Recipes Found</Text>}
			/>
		</View>
	);
}
//data={recipes}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'gray'
	}
});
