// Carrega codigo inicial do App

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';

// Configuração do Debugador
if(__DEV__) {
    import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }

AppRegistry.registerComponent(appName, () => App);
