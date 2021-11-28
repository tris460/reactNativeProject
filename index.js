/**
 * @format
 */

import {AppRegistry} from 'react-native';
import apiRequest from './src/components/apiRequest';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => apiRequest);
