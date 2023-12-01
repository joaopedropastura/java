import { Text, View, StyleSheet, Touchable } from 'react-native';

const ArtistPage = () => {

    return (
        <View>
            <View>
                <Text>Moisés Odorissio</Text>
                <Text>
                    Meu trabalho contempla uma das mais antigas 
                    fontes de inspiração na arte: o corpo humano
                    em seus movimentos cotidianos. Os traços que
                    crio são leves e quase sempre imperfeitos, 
                    assim como o corpo é. Uma das principais 
                    características das minhas criações é a remoção
                    de detalhes óbvios, despertando ao final a i
                    maginação e criando um resultado sofisticado
                    e minimalista.
                </Text>
            </View>

            <Touchable
                onPress={() => goToChat()}
                style={styles.goToChatBtn}
            >
                <Text>Solicitar uma arte personalizada</Text>
            </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    goToChatBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 220,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginTop: 20
    }
})


export default ArtistPage