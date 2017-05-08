import React from 'react';
import {View, Text } from 'react-native';
import axandroid from 'axandroid';

class AlbumList extends Component {
	componentWillMount(){
		axandroid.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => console.log(response));
	}

	render(){
		return (
			<View>
				<Text> Albuns List!!! </Text>
			</View>
		);
	}	
}

export default AlbumList;