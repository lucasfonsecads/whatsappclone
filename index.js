import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

const application = props => (
    <App />
)

AppRegistry.registerComponent('whatsappclone', () => application);
