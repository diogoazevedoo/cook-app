import { router } from "expo-router";
import { useEffect, useState } from "react";

import { View, Text, ScrollView, Alert } from "react-native";

import { styles } from "./styles";

import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";

import { services } from "@/services";

export default function Index() {
    const [selected, setSelected] = useState<string[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    function handleToggleSelected(value: string) {
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert('Clear', 'Want to clear all?', [
            { text: 'No', style: 'cancel' },
            { text: 'Yes', onPress: () => setSelected([]) },
        ])
    }

    function handleSearch() {
        router.navigate('/recipes/' + selected)
    }

    useEffect(() => {
        services.ingredients
        .findAll()
        .then(setIngredients)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Choose {"\n"}
                <Text style={styles.subtitle}>the products</Text>
            </Text>

            <Text style={styles.message}>
                Discover recipes based on the products you've chosen
            </Text>

            <ScrollView 
                contentContainerStyle={styles.ingredients} 
                showsVerticalScrollIndicator={false}
            >
                {ingredients.map((item) => (
                    <Ingredient 
                        key={item.id} 
                        name={item.name}
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected={selected.includes(String(item.id))} 
                        onPress={() => handleToggleSelected(String(item.id))} 
                    />
                ))}
            </ScrollView>

            {selected.length > 0 && (
                <Selected 
                    quantity={selected.length} 
                    onClear={handleClearSelected} 
                    onSearch={handleSearch}
                />
            )}
        </View>
    )
}