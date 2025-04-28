// App.js
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation';
import TimerService from './src/services/TimerService';

const App = () => {
  // Setup and cleanup for services
  useEffect(() => {
    // Cleanup when app unmounts
    return () => {
      TimerService.cleanup();
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8E7" />
      <AppNavigator />
    </>
  );
};

export default App;