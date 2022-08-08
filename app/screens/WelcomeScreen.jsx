import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';

const WelcomeScreen = () => {

    const handleOnPress = () => {
        console.log('Login Pressed');
    }

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            blurRadius={8}
            style={styles.background} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title={'login'} onPress={handleOnPress} />
                <AppButton title={'register'} onPress={handleOnPress} color='secondary' />
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },
    buttonContainer: {
        width: '100%',
        padding: 20,
    }
})