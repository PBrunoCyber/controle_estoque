export type RootStackParamList = {
  Home: undefined; // Tela "Home" não aceita parâmetros
  ResetPassword: { oobCode: string }; // Tela "Details" espera um parâmetro itemId
};
