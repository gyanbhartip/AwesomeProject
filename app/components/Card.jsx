import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import AppText from './AppText'
import colors from '../config/colors'

const Card = ({ title, subtitle, image }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.cardImage} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})