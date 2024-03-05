import { View, Text, ScrollView, Alert } from "react-native";
import { useState } from "react";

import { styles } from "./styles";

import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";


export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

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
                {Array.from({ length: 20 }).map((item, index) => (
                    <Ingredient 
                        key={index} 
                        name="Tomato" 
                        image="" 
                        selected={selected.includes(String(index))} 
                        onPress={() => handleToggleSelected(String(index))} 
                    />
                ))}
            </ScrollView>

            {selected.length > 0 && (
                <Selected 
                    quantity={selected.length} 
                    onClear={handleClearSelected} 
                    onSearch={() => {}}
                />
            )}
        </View>
    )
}