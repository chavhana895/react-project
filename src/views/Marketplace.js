import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { AppBar } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Chavhan', firstName: 'Avinash', age: 23 },
  { id: 2, lastName: 'Rathod', firstName: 'Rahul', age: 22 },
  { id: 3, lastName: 'Jadhav', firstName: 'Prajakta', age: 23 },
  { id: 4, lastName: 'Pawar', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Gaikwad', firstName: 'Pradum', age: 27 },
  { id: 6, lastName: 'Chavhan', firstName: 'Tushar', age: 24 },
  { id: 7, lastName: 'Takle', firstName: 'Ram', age: 44 },
  { id: 8, lastName: 'Boorela', firstName: 'Ramya', age: 36 },
  { id: 9, lastName: 'Christina', firstName: 'Diana', age: 65 },
];

function Marketplace() {
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
           <AppBar>
             <Navbar/>
          </AppBar>
             <Sidebar/>
    <div style={{ height: 400, width: '80%', marginLeft:250 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10,20]}
        pagination
      />
    </div>
    </>
  );
}

export const name = state => state.rows.firstName;

export default Marketplace
