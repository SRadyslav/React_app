import React, { useEffect, useState }  from 'react'
import Message from '../../components/Dialogs/Message/Message'


export const wcChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return(
        <div>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    return(
        <div>
            <Messages />
            <AddMessagesForm />
        </div>
    )
}
const Messages: React.FC = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        wcChannel.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])
    return(
        <div style={{ height: '615px', overflowY: 'auto',  }}>
            {messages.map((m, index) => <Message key={index} chatMessage={m} />)}
        </div>
    )
}



const AddMessagesForm: React.FC = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () =>{
        if(!message) {
            return
        }
        wcChannel.send(message)
        setMessage('')
    }
    return(
        <div>
            <div>
                <textarea onChange={(e)=> setMessage(e.currentTarget.value)} value ={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage