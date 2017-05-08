//  place code in here for android !! 


// Immport a library to hepl create c component 
import React from 'react';
import {Text,AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component 

const App =() => (
    <View>
    	<Header headerText={'Albums'} />
    	<AlbumList/>
    </View>
);




// Render it to tge device

AppRegistry.registerComponent('albums', ()=> App);

