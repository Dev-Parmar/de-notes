import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

export default function NoteCard(props) {
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton onClick={() => props.handleDelete(props.note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={props.note.title}
                subheader={props.note.category.charAt(0).toUpperCase() + props.note.category.slice(1)}
            />
            <CardContent>
                <Typography variant='body2'>
                    {props.note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}
