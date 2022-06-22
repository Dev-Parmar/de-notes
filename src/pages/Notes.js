import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { Masonry } from '@mui/lab'

export default function Create() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const newNotes = notes.filter(note => note.id !== id)

        setNotes(newNotes)


    }

    return (
        <Container>
            <Masonry columns={3} spacing={2}>
                {notes.map(note => (
                    <Grid item key={note.id} md={6} lg={4} xs={12}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Masonry>
        </Container>
    )
}
