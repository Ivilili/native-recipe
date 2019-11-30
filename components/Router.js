import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { NativeRouter, Route, Switch, Link } from 'react-router-native';

export default (Router = () => {
	<NativeRouter>
		<View>
			<Switch>
				<Route exact path="/" component={Recipe} />
				<Route path="/recipe" component={RecipeDetails} />
			</Switch>
		</View>
	</NativeRouter>;
});
