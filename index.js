/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { withFireOTA } from '@fireota/react-native';
import fireotaConfig from './fireota.config';

AppRegistry.registerComponent(appName, () => withFireOTA(App, fireotaConfig));
