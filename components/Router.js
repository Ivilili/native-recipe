import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

export default (Router = () => {
	<NativeRouter>
		<View>
			<Route exact path="/" component={App} />
			<Route path="/recipe/:label" component={RecipeDetails} />
		</View>
	</NativeRouter>;
});
