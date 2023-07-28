import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 
const ScholarshipForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [school, setSchool] = useState('')
    const [college, setCollege] = useState('')
    const [rollno, setRollNo] = useState('')

 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth,school,college,rollno)
    }
 
    return (
        <React.Fragment>
            <h2>Scholarship Form</h2>
            <form onSubmit={handleSubmit} action={<Link to="/payment" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="School"
                    onChange={e => setSchool(e.target.value)}
                    value={school}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                  <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="College"
                    onChange={e => setCollege(e.target.value)}
                    value={college}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Roll No."
                    onChange={e => setRollNo(e.target.value)}
                    value={rollno}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="grey" type="submit">Register</Button>
            </form>
     
        </React.Fragment>
    )
}
 
export default ScholarshipForm;
