import React, { useState } from 'react'
import { Container, Typography, Button, TextField, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Notes() {

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [titleErr, setTitleErr] = useState(false);
    const [detailErr, setDetailErr] = useState(false);
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title) {
            setTitleErr(false)
        } else {
            setTitleErr(true)
        }

        if (detail) {
            setDetailErr(false)
        } else {
            setDetailErr(true)
        }

        if (title && detail) {
            console.log('true')
        } else {
            console.log('false')
        }
    }

    return (
        <Container>
            <Typography
                variant='h6'
                color='textSecondary'
                gutterBottom
            >
                Create a new Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{
                        my: 3,
                        display: 'block'
                    }}
                    label='Note Title'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleErr}
                />
                <TextField
                    onChange={(e) => setDetail(e.target.value)}
                    sx={{
                        my: 3,
                        display: 'block'
                    }}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    multiline
                    rows={5}
                    error={detailErr}
                />

                <FormControl
                    sx={{
                        my: 3,
                        display: 'block'
                    }}
                >
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        <FormControlLabel control={<Radio color='secondary' />} value='money' label='Money' />
                        <FormControlLabel control={<Radio color='secondary' />} value='todo' label='To Do' />
                        <FormControlLabel control={<Radio color='secondary' />} value='reminders' label='Reminders' />
                        <FormControlLabel control={<Radio color='secondary' />} value='work' label='Work' />
                    </RadioGroup>
                </FormControl>

                <Button
                    type='submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<ArrowForwardIcon />}
                >
                    Submit
                </Button>
            </form>


        </Container>
    )
}
