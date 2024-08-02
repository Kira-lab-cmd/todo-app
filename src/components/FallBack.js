import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FallBack = () => {
    return (
        <View style={styles.container} >
            <Image source={require("./../../assets/checklist_10990115.png")} style={styles.image} />
            <Text style={styles.Text}>Yapılacaklar listesi oluştur</Text>
        </View>
    )
}

export default FallBack

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 68,
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 300,
    },
    Text: {
        fontSize: 24,
        color: "#CD5C5C",
        fontWeight: "bold",
        fontStyle: "italic",

    },
})