import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'Message 1',
        description: 'This is the body of message 1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Message 2',
        description: 'This is the body of message 2',
        image: require('../assets/mosh.jpg')
    },
]

const MessagesScreen = () => {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        setMessages(messages.filter(
            m => m.id !== message.id
        ))
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Screen>
                <FlatList data={messages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            subtitle={item.description}
                            image={item.image}
                            onPress={() => console.log('Message selected')}
                            renderRightActions={() => (
                                <ListItemDeleteAction onPress={() => handleDelete(item)} />
                            )}
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setMessages([
                            initialMessages[1],
                        ])
                    }}
                />
            </Screen>
        </GestureHandlerRootView>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
})