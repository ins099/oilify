
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReqsProvider from './src/components/common/ReqsProvider';
import { ThemeProviders } from './src/Contexts/ThemeProviders';
import RootNavigation from './src/navigation';
import { persistor, store } from './src/redux/store';
import { useNotifications } from './src/utils/hooks/useNotifications';

const App: React.FC = () => {
  LogBox.ignoreAllLogs();
  useNotifications()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor={COLORS[].white} barStyle={'dark-content'} /> */}
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <ToastProvider placement="top" duration={4000} style={{ top: 30 }}>
            <ThemeProviders>
              <NavigationContainer>
                <ReqsProvider>
                  <SafeAreaProvider>
                    <RootNavigation />
                    {/* <ScreenFour /> */}
                  </SafeAreaProvider>
                </ReqsProvider>
              </NavigationContainer>
            </ThemeProviders>
          </ToastProvider>
        </Provider>
      </PersistGate>
    </GestureHandlerRootView>
  );
};

export default App;
