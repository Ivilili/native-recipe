import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

const TabNavigator = createBottomTabNavigator(
	{
		Home: Home,
		RecipeList: RecipeList,
		RecipeDetails: RecipeDetails
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let IconComponent = Ionicons;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-information-circle${focused ? '' : '-outline'}`;
				} else if (routeName === 'RecipeList') {
					iconName = `ios-book`;
				}

				return <IconComponent name={iconName} size={30} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: '#8fbc8f',
			inactiveTintColor: 'gray',
			showLabel: false
		}
	}
);
const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
