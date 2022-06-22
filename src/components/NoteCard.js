import React from 'react'
import { Card, CardHeader, CardContent, Typography, Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

export default function NoteCard({ note, handleDelete }) {
    return (
        <Card sx={{
            border: note.category === 'work' ? '1px solid red' : null
        }}>
            <CardHeader
                avatar={
                    <Avatar>{note.category[0].toUpperCase()}</Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category.charAt(0).toUpperCase() + note.category.slice(1)}
            />
            <CardContent>
                <Typography variant='body2'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card >
    )
}
