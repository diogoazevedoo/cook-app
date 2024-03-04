import { View, Text } from "react-native";

import { styles } from "./styles";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Choose {"\n"}
                <Text style={styles.subtitle}>the products</Text>
            </Text>

            <Text style={styles.message}>
                Discover recipes based on the products you've chosen
            </Text>
        </View>
    )
}