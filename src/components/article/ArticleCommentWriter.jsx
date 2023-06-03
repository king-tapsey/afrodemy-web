import { Button, TextField, createStyles, makeStyles } from '@mui/material'
import SendIcon from './@mui/icons-material'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapForm: {
            display: 'flex',
            justifyContent: 'center',
            width: '95%',
            margin: `${theme.spacing(0)} auto`
        },
        wrapText: {
            width: '100%'
        },
        // button: {}
    })
)

export default function ArticleCommentWriter() {
    const [comment, setComment] = useState(null)

    const classes = useStyles()
    
    return (
        <>
            <form className={classes.wrapForm} noValidate autoCapitalize='true'>
                <TextField
                    id='title-bar' 
                    label='Title' 
                    variant='standard' 
                    value={comment}
                    className={classes.wrapText}
                    onChange={handleChange}
                    multiline
                />
                <Button variant='contained' color='secondary' endIcon={<SendIcon />}>
                    Send
                </Button>
            </form>
        </>
    )
}
