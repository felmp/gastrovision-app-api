import Login from './src/pages/Login'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Routes } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
      <AuthProvider>
        <NativeBaseProvider>
          <StatusBar style="auto" barStyle="light-content" backgroundColor="transparent" translucent />
          { fontsLoaded ? <Routes /> : <Loading />}

        </NativeBaseProvider>
      </AuthProvider>
  );
}

