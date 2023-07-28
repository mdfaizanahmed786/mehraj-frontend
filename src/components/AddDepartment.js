import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Box } from '@mui/material';
import { Link } from "react-router-dom";


const AddDepartment = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState('');
  const [icon, setIcon]= useState('');
  const [status, setStatus] = useState('enabled');

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setDescription('');
    setIcon('');
    setStatus('enabled');
  };

  return (
    <Box style={{backgroundColor:'grey'}}>
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{  padding: '20px', borderRadius: '10px' }}></div>
    <React.Fragment>
    <h2 style={{ textAlign: 'top' }}>Add Department</h2>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }} onSubmit={handleSubmit} action={<Link to="/departments" />}>
           <Stack spacing={2} direction="row" sx={{marginBottom: 4}}></Stack>
        <label htmlFor="name">Department Name:</label>
        <input className='Formelement'
        type="text"
        variant='outlined'
        value={name}
        fullWidth
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />

      <label htmlFor="description">Department Description:</label>
      <textarea
        id="description"
        variant='outlined'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        cols="50"
        required
      ></textarea>
      <br /><br />
      <label htmlFor="icon">  Icon:</label>
      <input
        type="text"
        variant='outlined'
        id="icon"
        value={icon}
        fullWidth
        onChange={(e) => setIcon(e.target.value)}
        required
      /><br /><br />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="enabled">Enabled</option>
        <option value="disabled">Disabled</option>
      </select><br /><br />

      <input style={{color:"grey"}} type="submit" value="Add Department" />
    </form>
    </React.Fragment>
  </div> 
  </Box> 
  );
};

export default AddDepartment;
