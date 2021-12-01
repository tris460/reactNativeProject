/**
 * @format
 */

import {AppRegistry} from 'react-native';
import login from './src/components/login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => login);
