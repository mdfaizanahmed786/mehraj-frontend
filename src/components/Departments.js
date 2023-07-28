import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import * as React from 'react';


import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';



const ActionBtn =() =>{
  return  <Stack direction="row" alignItems="center" spacing={1}>
  <IconButton aria-aria-label="view" size="medium">
    <RemoveRedEyeIcon fontSize="inherit"/>  
  </IconButton>
  <IconButton aria-aria-label="edit" size="medium">
    <CreateIcon fontSize="inherit"/>  
  </IconButton>  
  <IconButton aria-aria-label="delete" size="medium">
    <DeleteIcon fontSize="inherit"/>  
  </IconButton>    
  </Stack>
};




export default function Departments() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name',
      headerName: 'Name',
      width: 250,
      editable: true,
    },
    {
      field: 'Description',
      headerName: 'Description',
      width: 150,
      editable: true,
    },
    {
      field: 'Icon',
      headerName: 'Icon',
      width: 200,
      editable: true,
  
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width:300,
      renderCell:(value) => {
     
        return(
  <Link to={`/departments/EditDepartments/${value.row.id}`} style={{textDecoration:'none'}}><ActionBtn/></Link>
       
        );
      }
    },
  ];
  
  const {data: departments, isLoading}=useQuery({
    queryKey:['departments'],
    queryFn: async () => {
      const {data} = await axios.get('http://localhost:5000/v1/department/getAllDepartments');
      return data;
    }
  
  })

  const rows = departments?.departments?.map((department) => {
    return {
      id: department._id,
      Name: department.name,
      Description: department.description,
      Icon: department.icon,
    };
  });


  return (
    <div style={{alignContent:'center'}}>
      
    <Box  sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
}