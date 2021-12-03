/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import login from './src/components/login';
// import menu from './src/components/menu';
// import editProduct from './src/components/editProduct';
import products from './src/components/products';
// import about from './src/components/about'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => products);
