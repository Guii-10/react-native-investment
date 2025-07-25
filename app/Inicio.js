import { Text, View, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function Inicio(){

    const router = useRouter()

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.navBar}>
                
                <Text>Casa </Text>
                
                <Pressable onPress={() => router.navigate('/TelaInve')}>
                <Text>Investimentos </Text>
                </Pressable>

                <Pressable onPress={() => router.navigate('/Chat')}>
                <Text>Chat </Text>
                </Pressable>

            </View>

            <Pressable onPress={() => router.navigate('/Perfil')}>
            <View style={styles.navIni}>

            </View>
            </Pressable>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100vh',
        width: '100%',
        backgroundColor: '#E9E9E9',
  
    },

    navBar: {
        display: 'flex',
        flexDirection: 'row',
        position:'absolute',
        bottom:0,
        backgroundColor:'#505050',
        borderRadius: 25,
        height:'89',
        width:'100%',
        marginBottom: 10,
        justifyContent: "space-around",
        alignItems: 'center'
    },

    navIni: {
        flex: 0,
        backgroundColor:'black',
        borderRadius: 100,
        height:'60',
        width:'60',
        alignItems: 'flex-start',
        marginTop: 60,
        marginLeft: 30
    },
})
