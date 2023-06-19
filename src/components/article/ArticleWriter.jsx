import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { Box, CssBaseline, TextField, Typography, createStyles, makeStyles, Divider } from '@mui/material'

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapperClass:{
            padding: '1rem',
            border: `1px solid ${theme.palette.primary.dark}`
        },
        editorClass: {
            backgroundColor: 'inherit',
            padding: '1rem',
            border: `1px solid ${theme.palette.primary.dark}`
        },
        toolBarClass: {
            border: `1px solid ${theme.palette.primary.dark}`
        }
    })
)
const postCommentPermissions = {
    allowed: 'ALLOWED',
    disallowedShowExisting: 'DISALLOWED_SHOW_EXISTING',
    disallowedHideExisting: 'DISALLOWED_HIDE_EXISTING'
}

export default function ArticleWriter() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty)
    const [title, setTitle] = useState(null)
    const [tags, setTags] = useState(null)
    const [commentsOption, setCommentsOption] = useState(postCommentPermissions.allowed)

    const handleTitleChange = (event) => (
        setTitle(event.target.value)
    )
    const handleSave = () => (
        //TODO: send post request to server
    )
    const classes = useStyles()

    return (
        <>
            <CssBaseline />
            <Box display='inline'>
                <Box display='block'>
                    <Box display='inline-flex'>
                        <Typography variant='h2' flexGrow={1}>Afrocodemy Writer</Typography>
                        <Button onClick={handleSave}>
                            Save
                        </Button>
                    </Box>
                    <Divider />
                    <Box>
                        <TextField 
                            value={title} 
                            onChange={handleTitleChange} 
                            id='title-bar' 
                            label='Title' 
                            variant='standard' 
                        />
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            wrapperClassName={classes.wrapperClass}
                            editorClassName={classes.editorClass}
                            toolbarClassName={classes.toolbarClass}
                        />
                    </Box>
                </Box>
                <Divider orientation='vertical' variant='middle' />
                
            </Box>
        </>
    )
}
