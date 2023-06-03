import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import UpArrow from '@mui/icons-material/KeyboardArrowUp'
import DownArrow from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import ForumComment from './ForumComment'

export default function ForumQuestion({ question }) {
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [commentText, setCommentText] = useState('')

    const handleAskQuestion = () => {
        //TODO
    }
    const handleUpVoteClick = () => {
        //TODO
    }
    const handleDownVoteClick = () => {
        //TODO
    }
    const handleSendComment = () => {
        //TODO - also run a useEffect to update the comments
    }
    const handleCommentTextChange = (event) => {
        setCommentText(event.target.value)
    }

    return (
        <Box display='block'>
            <Box display={{ xs: 'block', md: 'none' }}>
                <Box alignItems='right'>
                    <Button variant='contained' onClick={handleAskQuestion}>Ask Question</Button>
                </Box>
                <Box display='block'>
                    <Typography component='h3'>{question.title}</Typography>
                    <Box display='inline'>
                        <Typography variant='p'>Asked {question.createdDate}</Typography>
                        {
                            question.modifiedDate !== null && 
                            <Typography variant='p'>
                                Modified {question.modifiedDate}
                            </Typography>
                        }
                    </Box>
                </Box>
            </Box>
            <Box display={{ xs:'none', md: 'inline-flex' }}> 
                <Box display='block' flexGrow={1} maxWidth='80%'>
                    <Typography component='h3'>{question.title}</Typography>
                    <Box display='inline'>
                        <Typography variant='p'>Asked {question.createdDate}</Typography>
                        {
                            question.modifiedDate !== null && 
                            <Typography variant='p'>
                                Modified {question.modifiedDate}
                            </Typography>
                        }
                    </Box>
                </Box>
                <Button variant='contained' onClick={handleAskQuestion}>Ask Question</Button>
            </Box>
            <Divider />
            <Box display='block' paddingRight={{ xs: 0, lg: '20%' }}>
                <Box display='inline'>
                    <Box display='block'>
                        <Tooltip 
                            title='This question is useful, shows research effort, or is clear' 
                            placement='right' 
                            arrow
                        >
                            <IconButton color={upVote === true ? 'primary' : 'palette.text.secondary'} onClick={handleUpVoteClick} >
                                <UpArrow />
                            </IconButton>
                        </Tooltip>
                        <Typography component='h3'>{question.netVoteCount}</Typography>
                        <Tooltip
                            title='This question is not useful, lacks research effort, or is unclear'
                            placement='right'
                            arrow
                        >
                            <IconButton color={downVote === true ? 'primary' : 'palette.text.secondary' } onCLick={handleDownVoteClick}>
                                <DownArrow />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box>
                        {question.content}
                    </Box>
                </Box>
                <Divider />
                {question.comments.map((comment) => (
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
        </Box>
    )
}
