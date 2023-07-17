import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";

const API_KEY = "5kwrshdscr6k"

const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {
    //connect auth user to stream chat

    useEffect(() => {
        const connectUser = async () => {
            await client.connectUser({
                id: "Eric",
                name: "Eric.eth",
                image: "https://i.imgur.com/fR9Jz14.png"
            }, client.devToken("Eric"))

            const channel = client.channel('livestream', 'public', {name: 'Public'});
            await channel.create();
        }

        connectUser()

        return () => {
            client.disconnectUser();
        }
    }, [])

    return (
        <OverlayProvider>
            <Chat client={client}>
                <Stack>
                    <Stack.Screen name="index" options={{ title:"Messages" }} />
                </Stack>
            </Chat>
        </OverlayProvider>
    )
}