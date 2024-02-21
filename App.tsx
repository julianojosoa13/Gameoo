import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './screens/auth/Login';
import Onboarding from './screens/auth/Onboarding';

export default function App() {
  return (
    <>
      <Onboarding />
      <StatusBar style="light" />
    </>
  );
}

