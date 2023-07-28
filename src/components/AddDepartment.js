import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';


const AddDepartment = () => {
  const queryClient=useQueryClient();
  const [department, setDepartment] = useState({
    name: '',
    description: '',
    icon: '',
    status: false

  });
  const navigate = useNavigate();

  const {mutate:addDepartment, isLoading}=useMutation({
    mutationFn: async (newDepartment) => {
      const response = await axios.post(`http://localhost:5000/v1/department/addDepartment`, newDepartment);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('departments');
      navigate('/departments');
    },

 
  })



  return (
    <Box style={{backgroundColor:'grey'}}>
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{  padding: '20px', borderRadius: '10px' }}></div>
    <React.Fragment>
    <h2 style={{ textAlign: 'top' }}>Add Department</h2>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }} onSubmit={e=>e.preventDefault()} action={<Link to="/departments" />}>
           <Stack spacing={2} direction="row" sx={{marginBottom: 4}}></Stack>
        <label htmlFor="name">Department Name:</label>
        <input className='Formelement'
        type="text"
        variant='outlined'
        value={department.name}
        fullWidth
        onChange={(e) => setDepartment({...department,name:e.target.value})}
        required
      /><br /><br />

      <label htmlFor="description">Department Description:</label>
      <textarea
        id="description"
        variant='outlined'
        value={department.description}
        onChange={(e) => setDepartment({...department,description:e.target.value})
        }
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
        value={department.icon}
        fullWidth
        onChange={(e) => setDepartment({...department, icon:e.target.value})}
        required
      /><br /><br />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={department.status}
        onChange={(e) => setDepartment({...department, status:e.target.value})
        }
        required
      >
        <option value={true}>Enabled</option>
        <option value={false}>Disabled</option>
      </select><br /><br />

      <Button style={{background:"grey"}} type="submit" variant="contained" color="primary" onClick={()=>addDepartment(department)}>{
        isLoading ? 'Loading...' : 'Add Department'
      }</Button>
    </form>
    </React.Fragment>
  </div> 
  </Box> 
  );
};

export default AddDepartment;
