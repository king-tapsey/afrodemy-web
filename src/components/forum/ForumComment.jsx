import { Box, Divider, Link, Tooltip, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export default function ForumComment({ comment }) {
    const handleOpenUserAccount = () => {
        //TODO
    }
    
    return (
        <Box>
            <Typography>
                {comment.text} - 
                <Link underline='hover' onClick={handleOpenUserAccount}>{comment.senderUsername}</Link> 
                <b>{comment.dateCreated}</b>
                {
                    comment.modifiedDate !== null && 
                    <Tooltip title='Edited' arrow>
                        <EditIcon />
                    </Tooltip>
                }
            </Typography>
            <Divider />
        </Box>
    )
}
