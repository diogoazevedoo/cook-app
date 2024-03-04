import { View, Text, ScrollView } from "react-native";
import { useState } from "react";

import { styles } from "./styles";

import { Ingredient } from "@/components/Ingredient";


export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
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
        </View>
    )
}