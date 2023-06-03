import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { Box, CssBaseline, TextField, createStyles, makeStyles } from '@mui/material'

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
    const classes = useStyles()

    return (
        <>
            <Box>
                <CssBaseline />
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
        </>
    )
}
