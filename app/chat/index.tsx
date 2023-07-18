import { useRouter } from 'expo-router'
import { ChannelList } from 'stream-chat-expo'

const ChatScreen = () => {
    const router = useRouter()

    //navigate to /chat/channel/public
    return (
        <ChannelList onSelect={(channel) => router.push(`/chat/channel/${channel?.id}`)} />
    )
}

export default ChatScreen