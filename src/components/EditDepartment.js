import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Container, Stack, Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EditDepartment = () => {
  const departmentId=useParams().departmentId;
    const queryClient=useQueryClient();
  const [department, setDepartment] = useState({
    name: '',
    description: '',
    icon: '',
    status: false

  });
  const navigate = useNavigate();

  const {mutate:editDepartment, isLoading}=useMutation({
    mutationFn: async (newDepartment) => {
      const response = await axios.put(`http://localhost:5000/v1/department/editDepartment/${departmentId}`, newDepartment);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('departments')
      navigate('/departments');
    },
    enabled:!!departmentId
 
  })


  return (
    <Box style={{backgroundColor:'none'}}>
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: '20px', borderRadius: '10px' }}></div>
     <React.Fragment>
    < h2 style={{ textAlign: 'top' }}>Edit Department</h2>
     <form onSubmit={e=>e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}  action={<Link to="/departments" />}>
      <Stack spacing={5} direction="row" sx={{marginBottom: 5}}></Stack>
      <TextField
        label="Department Name"
        value={department.name}
        onChange={(e)=>setDepartment({...department,name:e.target.value})}
        fullWidth
        required
      /><br/>
      
      <TextField
        label="Description"
        value={department.description}
        onChange={(e)=>setDepartment({...department,description:e.target.value})
        }
        fullWidth
        required
      /><br/>
      
      <TextField
        label="Icon"
        value={department.icon}
        onChange={(e)=>setDepartment({...department,icon:e.target.value})
        }
        fullWidth
        required
      /><br/>
      
      <FormControl fullWidth required>
        <InputLabel>Status</InputLabel>
        <Select value={department.status} onChange={(e)=>setDepartment({...department, status:e.target.value})}>
          <MenuItem value={true}>Enabled</MenuItem>
          <MenuItem value={false}>Disabled</MenuItem>
        </Select>
      </FormControl>
      <Button style={{background:"grey"}} type="submit" variant="contained" color="primary" onClick={()=>editDepartment(department)}>{
        isLoading ? 'Loading...' : 'Edit Department'
      }</Button>
    </form>
    </React.Fragment>
    </div>
    </Box>
  );
};

export default EditDepartment;
