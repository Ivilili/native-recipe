import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Recipe from './Recipe';
import Search from './Search';

export default function RecipeList({ recipes, handleDetails, value, handleSubmit, handleChange, error, isLoading }) {
	if (isLoading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Search value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
				{recipes.map((recipe, index) => {
					return (
						<Recipe
							key={index}
							label={recipe.recipe.label}
							yield={recipe.recipe.yield}
							calories={recipe.recipe.calories}
							image={recipe.recipe.image}
							ingredients={recipe.recipe.ingredients}
							recipe={recipe.recipe}
							handleDetails={handleDetails}
						/>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'gray'
	}
});
