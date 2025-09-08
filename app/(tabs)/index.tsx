import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold">Welcome!</Text>
      <Link href="/onboarding" className="mt-5 text-blue-500 text-lg">
        Go to Onboarding
      </Link>
      <Link href="/movie/avenger" className="mt-5 text-blue-500 text-lg">
        Go to Avenger movie
      </Link>
    </View>
  );
}
