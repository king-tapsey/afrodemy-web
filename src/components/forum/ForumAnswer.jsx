import { Box, Button, TextField, Tooltip } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import UpArrow from '@mui/icons-material/KeyboardArrowUp'
import DownArrow from '@mui/icons-material/KeyboardArrowDown'
import SendIcon from '@mui/icons-material/Send'

export default function ForumAnswer({ answer }) {
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [commentText, setCommentText] = useState('')

    const answerAcceptedText = `This answer was accepted as the best answer by the question owner on ${answer.acceptedDate}`

    const handleUpVoteClick = () => {
        //TODO
    }
    const handleDownVoteClick = () => {
        //TODO
    }
    const handleSendComment = () => {
        //TODO
    }
    const handleCommentTextChange = (event) => {
        setCommentText(event.target.value)
    }

    return (
        <Box display='block' paddingRight={{ xs: 0, lg: '20%' }}>
            <Box display='inline'>
                <Box display='block'>
                    <Tooltip 
                        title='This answer is useful' 
                        placement='right' 
                        arrow
                    >
                        <IconButton color={upVote === true ? 'primary' : 'palette.text.secondary' } onClick={handleUpVoteClick} >
                            <UpArrow />
                        </IconButton>
                    </Tooltip>
                    <Typography component='h3'>{answer.netVoteCount}</Typography>
                    <Tooltip
                        title='This answer is not useful'
                        placement='right'
                        arrow
                    >
                        <IconButton color={downVote === true ? 'primary' : 'palette.text.secondary' } onCLick={handleDownVoteClick}>
                            <DownArrow />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title={answerAcceptedText}
                        placement='right'
                        arrow
                    >
                        <CheckIcon color='palette.success.dark' />
                    </Tooltip>
                </Box>
                <Box>
                    {answer.content}
                </Box>
            </Box>
            <Divider />
            {answer.comments.map((comment) => (
                <ForumComment comment={comment} />
            ))}
            <Box display='flex-inline'>
                <Box width='90%'>
                    <TextField fullWidth multiline label='Type a comment here' onChange={handleCommentTextChange} />
                </Box>
                <Button variant='contained' color='secondary' onClick={handleSendComment} sx={{ borderRadius: '30px' }}>
                    <SendIcon />
                </Button>
            </Box>
        </Box>
    )
}
