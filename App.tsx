import "./global.css";
import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/RootStackParamsList";
import LoginPage from "./src/pages/Login";
import ResetPasswordPage from "./src/pages/ResetPassword";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
export default App;
