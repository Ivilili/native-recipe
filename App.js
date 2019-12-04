import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

const RootStack = createStackNavigator(
	{
		Home: Home,
		RecipeList: RecipeList,
		RecipeDetails: RecipeDetails
	},
	{
		initialRouteName: 'Home'
	}
);
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
