import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Recipe from './Recipe';

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
				{/* 	{recipes.map((recipe, index) => {
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
				*/}
				<Recipe />
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
