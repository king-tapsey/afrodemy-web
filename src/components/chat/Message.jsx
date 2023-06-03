import { Box, Paper, Typography } from '@mui/material'
import MessageDelivered from '@mui/icons-material/DoneAll'
import MessageSent from '@mui/icons-material/Done'
import Mic from '@mui/icons-material/Mic'
import VideoIcon from '@mui/icons-material/Videocam'
import DocumentIcon from '@mui/icons-material/Article'

const MessageStatus = ({ statusValue }) => {
    return(
        <>
            {
                statusValue === 'sent' ? <MessageSent size='small' /> :
                statusValue === 'delivered' ? <MessageDelivered size='small' /> :
                <MessageDelivered color='secondary' size='small' />
            }
        </>
    )
}
const RepliedMessageContainer = ({ repliedMessage }) => {
    return(
        <Paper elevation={1} sx={{ borderLeftColor: 'primary', padding: 1 }}>
            {
                repliedMessage.type === 'text' ? 
                    <Box display='block'>
                        <Typography variant='subtitle2'>{repliedMessage.sender}</Typography>
                        <Typography>
                            {repliedMessage.text.length < 100 ? repliedMessage.text : repliedMessage.text.substring(0, 100) + '...'}
                        </Typography>
                    </Box>
                : repliedMessage.type === 'audio' ?
                    <Box display='block'>
                        <Typography variant='subtitle2'>{repliedMessage.sender}</Typography>
                        <Box display='inline-flex'>
                            <Mic color='primary' />
                            <Typography variant='body2'>Audio {repliedMessage.duration}</Typography>
                        </Box>
                    </Box>
                : repliedMessage.type == 'video' ?
                    <Box display='block'>
                        <Typography variant='subtitle2'>{repliedMessage.sender}</Typography>
                        <Box display='inline-flex'>
                            <VideoIcon color='primary' />
                            <Typography variant='body2'>Video {repliedMessage.duration}</Typography>
                        </Box>
                    </Box>
                : <Box display='block'>
                    <Typography variant='subtitle2'>{repliedMessage.sender}</Typography>
                    <Box display='inline-flex'>
                        <DocumentIcon color='primary' />
                        <Typography variant='body2'>{repliedMessage.documentName}</Typography>
                    </Box>
                </Box>
            }
        </Paper>
    )
}
const TextMessageElement = ({ messageText }) => {
    return(
        <Typography variant='body2' padding={5}>
            {messageText}
        </Typography>
    )
}
const AudioMessageElement = ({ audioUrl, audioType }) => {
    return(
        <Box display='block' padding={5}>
            <audio preload='auto' controls controlsList='nodownload playbackrate novolume' >
                <source src={audioUrl} type={audioType} />
                <p>your browser does not support audio content</p>
            </audio>
        </Box>
    )
}
const VideoMessageElement = ({ videoUrl, videoType, caption }) => {
    return(
        <Box display='block' padding={5}>
            <video controls controlsList='nodownload novolume' preload='metadata' height='100px'>
                <source src={videoUrl} type={videoType} />
            </video>
            <Typography variant='body2'>{caption}</Typography>
        </Box>
    )
}
const DocumentMessageElement = ({ documentUrl, caption }) => {
    return (
        <Box display='block' padding={5}>

        </Box>
    )
}

export const OutgoingMessage = ({ message }) => {
    return (
        <Box display='block' paddingX={2} alignItems='right' >
            <Paper elevation={3} sx={{ maxWidth: '80%',  }}>
                {
                    message.type === 'TEXT' ? <TextMessageElement messageText={message.text} /> :
                    message.type === 'AUDIO' ? <AudioMessageElement audioUrl={message.mediaUrl} audioType={message.codec} /> :
                    message.type === 'VIDEO' ? <VideoMessageElement videoUrl={message.mediaUrl} videoType={message.codec} caption={message.captionText} /> :
                    <DocumentMessageElement documentUrl={message.mediaUrl} caption={message.captionText} />
                }
                <Box display='inline' alignItems='right'>
                    <Typography variant='caption'>{message.time}</Typography>
                    <MessageStatus statusValue={message.status} />
                </Box>
            </Paper>
        </Box>
    )
}

export const IncomingGroupMessage = ({ message }) => {
    return (
        <Box display='block' paddingX={2} alignItems='left' >
            <Paper elevation={3} sx={{ maxWidth: '80%',  }}>
                <Typography variant='subtitle2'>{message.sender}</Typography>
                {
                    message.type === 'TEXT' ? <TextMessageElement messageText={message.text} /> :
                    message.type === 'AUDIO' ? <AudioMessageElement audioUrl={message.mediaUrl} audioType={message.codec} /> :
                    message.type === 'VIDEO' ? <VideoMessageElement videoUrl={message.mediaUrl} videoType={message.codec} caption={message.captionText} /> :
                    <DocumentMessageElement documentUrl={message.mediaUrl} caption={message.captionText} />
                }
                <Box display='inline' alignItems='right'>
                    <Typography variant='caption'>{message.time}</Typography>
                </Box>
            </Paper>
        </Box>    
    )
}

export const IncomingMessage = ({ message }) => {
    return (
        <Box display='block' paddingX={2} alignItems='left' >
            <Paper elevation={3} sx={{ maxWidth: '80%',  }}>
                {
                    message.type === 'TEXT' ? <TextMessageElement messageText={message.text} /> :
                    message.type === 'AUDIO' ? <AudioMessageElement audioUrl={message.mediaUrl} audioType={message.codec} /> :
                    message.type === 'VIDEO' ? <VideoMessageElement videoUrl={message.mediaUrl} videoType={message.codec} caption={message.captionText} /> :
                    <DocumentMessageElement documentUrl={message.mediaUrl} caption={message.captionText} />
                }
                <Box display='inline' alignItems='right'>
                    <Typography variant='caption'>{message.time}</Typography>
                </Box>
            </Paper>
        </Box>
    )
}
export const OutgoingMessageReply = ({ message }) => {
    return (
        <Box display='block' paddingX={2} alignItems='right' >
            <Paper elevation={3} sx={{ maxWidth: '80%',  }}>
                <RepliedMessageContainer repliedMessage={message.repliedMessage} />
                {
                    message.type === 'TEXT' ? <TextMessageElement messageText={message.text} /> :
                    message.type === 'AUDIO' ? <AudioMessageElement audioUrl={message.mediaUrl} audioType={message.codec} /> :
                    message.type === 'VIDEO' ? <VideoMessageElement videoUrl={message.mediaUrl} videoType={message.codec} caption={message.captionText} /> :
                    <DocumentMessageElement documentUrl={message.mediaUrl} caption={message.captionText} />
                }
                <Box display='inline' alignItems='right'>
                    <Typography variant='caption'>{message.time}</Typography>
                    <MessageStatus statusValue={message.status} />
                </Box>
            </Paper>
        </Box>
    )
  }
  
  export const IncomingGroupMessageReply = ({ message }) => {
    return (
        <Box display='block' paddingX={2} alignItems='left' >
            <Paper elevation={3} sx={{ maxWidth: '80%',  }}>
                <Typography variant='subtitle2'>{message.sender}</Typography>
                <RepliedMessageContainer repliedMessage={message.repliedMessage} />
                {
                    message.type === 'TEXT' ? <TextMessageElement messageText={message.text} /> :
                    message.type === 'AUDIO' ? <AudioMessageElement audioUrl={message.mediaUrl} audioType={message.codec} /> :
                    message.type === 'VIDEO' ? <VideoMessageElement videoUrl={message.mediaUrl} videoType={message.codec} caption={message.captionText} /> :
                    <DocumentMessageElement documentUrl={message.mediaUrl} caption={message.captionText} />
                }
                <Box display='inline' alignItems='right'>
                    <Typography variant='caption'>{message.time}</Typography>
                </Box>
            </Paper>
        </Box>    )
  }
  
export const IncomingMessageReply = ({ message }) => {
    return (
        <Box display='block' paddingX={2} alignItems='left' >
            <Paper elevation={3} sx={{ maxWidth: '80%',  }}>
                <RepliedMessageContainer repliedMessage={message.repliedMessage} />
                {
                    message.type === 'TEXT' ? <TextMessageElement messageText={message.text} /> :
                    message.type === 'AUDIO' ? <AudioMessageElement audioUrl={message.mediaUrl} audioType={message.codec} /> :
                    message.type === 'VIDEO' ? <VideoMessageElement videoUrl={message.mediaUrl} videoType={message.codec} caption={message.captionText} /> :
                    <DocumentMessageElement documentUrl={message.mediaUrl} caption={message.captionText} />
                }
                <Box display='inline' alignItems='right'>
                    <Typography variant='caption'>{message.time}</Typography>
                </Box>
            </Paper>
        </Box>
    )
}
