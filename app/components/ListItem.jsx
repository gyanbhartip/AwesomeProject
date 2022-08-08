import { TouchableHighlight, StyleSheet, View, Image } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({ title, subtitle, image, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '500',
    },
    subtitle: {
        color: colors.medium
    }
})

export default ListItem