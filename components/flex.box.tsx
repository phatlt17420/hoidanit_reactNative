import { StyleSheet, Text, View } from "react-native"

const Flexbox = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.item1}>item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>item 4</Text>
            </View>

        </View>
    )
}
export default Flexbox;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: "red",
        alignItems: "stretch"

    },
    item1: {
        backgroundColor: "violet",
        padding: 30,
        width: 50,
        height: 50
    },
    item2: {
        backgroundColor: "orange",
        padding: 30,
        height: 100
    },
    item3: {
        backgroundColor: "green",
        padding: 30
    },
    item4: {
        backgroundColor: "yellow",
        padding: 30,
        width: 50,
        height: 200
    }
})