import React, { useEffect, useRef, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Dialogs/Message/Message'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'





const ChatPage: React.FC = () => {
    return(
        <div>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)
    useEffect(()=>{
        dispatch(startMessagesListening())
    return () => {dispatch(stopMessagesListening())}
    },[])

    return(
        <div>
            {status === 'error' 
            && <div>Some error occured. Please refresh the page </div> }
            <> 
                <Messages />
                <AddMessagesForm />
            </>
            
        </div>
    )
}

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent >) => {
        const element = e.currentTarget;
        if ((element.scrollHeight - element.scrollTop === element.clientHeight))
        {
            !isAutoScroll && setIsAutoScroll(true)
        } else { 
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if(isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    } ,[messages])

    return(
        <div style={{ height: '615px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m) => <Message key={m.id} chatMessage={m} />)}
            <div ref={messagesAnchorRef}></div>
        </div>

    )
}



const AddMessagesForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler = () =>{
        if(!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return(
        <div>
            <div>
                <textarea onChange={(e)=> setMessage(e.currentTarget.value)} value ={message}></textarea>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage