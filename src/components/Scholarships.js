import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton, Stack } from '@mui/material';


const ActionScho =() =>{
  return  <Stack direction="row" alignItems="center" spacing={1}>
  <IconButton aria-aria-label="view" size="medium">
    <RemoveRedEyeIcon fontSize="inherit"/>  
  </IconButton>
  <IconButton aria-aria-label="edit" size="medium">
    <CreateIcon fontSize="inherit"/>  
  </IconButton>  
  </Stack>
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'studentInfo', headerName: 'Student Info', width: 150 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
  { field: 'applicationStatus', headerName: 'Application Status', width: 150 },
  {field: 'Actions',headerName: 'Actions',width:300,renderCell:() => {
    return(
      <ActionScho/>
    );
  }
},

];

const rows = [
  { id: 1, name: 'John', studentInfo: 'Info 1', gender: 'Male', dateOfBirth: '1995-08-10', applicationStatus: 'Pending',actions:<ActionScho/> },
  { id: 2, name: 'Sarah', studentInfo: 'Info 2', gender: 'Female', dateOfBirth: '1998-03-15', applicationStatus: 'Accepted',actions:<ActionScho/> },
  { id: 3, name: 'David', studentInfo: 'Info 3', gender: 'Male', dateOfBirth: '2000-11-22', applicationStatus: 'Rejected',actions:<ActionScho/> },
  { id: 4, name: 'Emily', studentInfo: 'Info 4', gender: 'Female', dateOfBirth: '1999-07-05', applicationStatus: 'Pending',actions:<ActionScho/> },
  { id: 5, name: 'John', studentInfo: 'Info 5', gender: 'Male', dateOfBirth: '1995-08-10', applicationStatus: 'Pending',actions:<ActionScho/> },
  { id: 6, name: 'Sara', studentInfo: 'Info 6', gender: 'Female', dateOfBirth: '1998-03-15', applicationStatus: 'Accepted',actions:<ActionScho/> },
  { id: 7, name: 'Dave', studentInfo: 'Info 7', gender: 'Male', dateOfBirth: '2000-11-22', applicationStatus: 'Rejected',actions:<ActionScho/> },
  { id: 8, name: 'Eminu', studentInfo: 'Info 8', gender: 'Female', dateOfBirth: '1999-07-05', applicationStatus: 'Pending',actions:<ActionScho/> },


];

const Scholarship = () => {
  return (
    <div style={{ height: 400, width: '100%',alignContent:'center',marginTop:'60px' }} >
     <h1>Student Application</h1>
     <DataGrid columns={columns} rows={rows} pageSize={5} />
    </div>
  );
}

export default Scholarship;


