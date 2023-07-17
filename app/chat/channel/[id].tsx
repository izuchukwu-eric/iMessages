import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Channel as ChannelType } from "stream-chat"
import { useLocalSearchParams } from 'expo-router'
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo'

const ChannelScreen = () => {
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const { client } = useChatContext();
    const { id } = useLocalSearchParams();

    useEffect(() => {
        const fetchChannel = async () => {
            const _id = typeof id === 'string' ?  id : id[0];
            const channels = await client.queryChannels({ id: { $eq: _id } });
            setChannel(channel[0]);
        }

        fetchChannel();
    }, [id])

    if(!channel) {
        return <ActivityIndicator />
    }

    return (
        <Channel channel={channel}>
            <MessageList />
            <MessageInput />
        </Channel>
    )
}

export default ChannelScreen