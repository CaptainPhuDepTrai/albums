//  place code in here for android !! 


// Immport a library to hepl create c component 
import React from 'react';
import {Text,AppRegistry} from 'react-native';
import Header from './src/components/header';
// Create a component 

const App =() => (
    <Header />
);




// Render it to tge device

AppRegistry.registerComponent('albums', ()=> App);

