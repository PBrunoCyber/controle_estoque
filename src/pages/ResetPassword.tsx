import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types/RootStackParamsList";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "ResetPassword">;

export default function ResetPasswordPage({
  route,
}: {
  route: DetailsScreenRouteProp;
}) {
  const { oobCode } = route.params;
  return (
    <View>
      <Text>Hello {oobCode}</Text>
    </View>
  );
}
