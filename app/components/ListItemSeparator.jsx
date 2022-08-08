import { StyleSheet, View } from 'react-native'

import colors from '../config/colors'

const ListItemseparator = () => {
    return (
        <View style={styles.separator} />
    )
}

export default ListItemseparator

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light
    }
})