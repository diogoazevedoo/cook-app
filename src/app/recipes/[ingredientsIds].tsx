import { router, useLocalSearchParams } from "expo-router";

import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { Recipe } from "@/components/Recipe";

export default function Recipes() {
    const params = useLocalSearchParams<{ ingredientsIds: string }>()
    const ingredientsIds = params.ingredientsIds.split(",")

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={32} onPress={() => router.back()} />

                <Text style={styles.title}>Ingredients</Text>

                
            </View>

            <FlatList 
                data={['1']} 
                keyExtractor={item => item}
                renderItem={
                    () => <Recipe recipe={{ name: 'Tomato Soup', image: 'data:image/jpeg;base64,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', minutes: 10 }} />
                }
            />
        </View>
    )
}