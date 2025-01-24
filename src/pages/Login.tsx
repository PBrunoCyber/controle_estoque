import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../types/RootStackParamsList";
import { useNavigation } from "@react-navigation/native";
import { Button, ButtonText } from "../components/ui/button";
import { Box } from "../components/ui/box";
import InputRHF from "../components/forms/InputRHF";
import { useForm } from "react-hook-form";
import { resolver } from "@/metro.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchemaValidations } from "../schemas/loginSchema";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function LoginPage() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const image = require("../../assets/images/login.png");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchemaValidations),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View className="flex flex-col justify-center h-full w-full items-center">
      <View className="w-[85%] h-full flex justify-center">
        <Box className="flex items-center">
          <Image
            source={image}
            style={{ width: 200, height: 200, objectFit: "contain" }}
          />
        </Box>
        <Text className="text-[36px] font-bold text-warning-400">Login</Text>
        <Text className="text-[18px] font-semibold text-primary-400">
          Faça login para continuar
        </Text>
        <Box className="flex flex-col gap-2 my-6">
          <InputRHF
            name={"email"}
            label="E-mail"
            placeholder="email@gmail.com"
            type="text"
            control={control}
            error={errors.email?.message}
          />
          <InputRHF
            name={"password"}
            label="Senha"
            type="password"
            placeholder="*************"
            helperText="Digite pelo menos 6 caracteres"
            control={control}
            error={errors.password?.message}
          />
        </Box>
        <Box className="flex">
          <Button
            onPress={handleSubmit(onSubmit)}
            className="bg-warning-400 text-white"
            variant="solid"
          >
            <ButtonText>Fazer login</ButtonText>
          </Button>
        </Box>
      </View>
    </View>
  );
}
