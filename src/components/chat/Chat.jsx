import { Box } from '@mui/material'
import React from 'react'
import { IncomingGroupMessage, IncomingGroupMessageReply, IncomingMessage, IncomingMessageReply, OutgoingMessage, OutgoingMessageReply } from './Message'

export function IndividualChat({ messages, signedInUser }) {
  return (
    <Box display='block'>
        {messages.map((message) => 
            message.sender === signedInUser.username && message.repliedMessage === null ? 
                <OutgoingMessage message={message} /> :
            message.sender === signedInUser.username && message.repliedMessage !== null ?
                <OutgoingMessageReply message={message} /> :
            message.sender !== signedInUser.username && message.repliedMessage === null ?
                <IncomingMessage message={message} /> :
            <IncomingMessageReply message={message} />
        )}
    </Box>
  )
}
import React from 'react'

export function GroupChat({ messages, signedInUser }) {
  return (
    <Box display='block'>
        {messages.map((message) => 
            message.sender === signedInUser.username && message.repliedMessage === null ? 
                <OutgoingMessage message={message} /> :
            message.sender === signedInUser.username && message.repliedMessage !== null ?
                <OutgoingMessageReply message={message} /> :
            message.sender !== signedInUser.username && message.repliedMessage === null ?
                <IncomingGroupMessage message={message} /> :
            <IncomingGroupMessageReply message={message} />
        )}
    </Box>
  )
}

