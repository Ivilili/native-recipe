import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Home extends Component {
	render() {
		return (
			<ImageBackground
				source={{ uri: 'https://i.postimg.cc/NMQH7yY5/bg.jpg' }}
				style={{ width: '100%', height: '100%' }}
			>
				<View style={styles.container}>
					<Text style={styles.baseText}>Find a recipe</Text>

					<Icon
						name="bowl"
						type="entypo"
						size={56}
						color="rgb(64, 72, 73)"
						onPress={() => {
							this.props.navigation.push('RecipeList');
						}}
					/>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},

	baseText: {
		fontSize: 46,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		textAlign: 'center',
		fontFamily: 'Zapfino',
		color: 'rgb(64, 72, 73)'
	},
	icon: {}
});
