import { message } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllBookings = () => {
   const [allBookings, setAllBookings] = useState([]);

   const getAllBooking = async () => {
      try {
         const response = await axios.get('http://localhost:8001/api/admin/getallbookings', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
         });

         if (response.data.success) {
            setAllBookings(response.data.data);
         } else {
            message.error(response.data.message);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getAllBooking();
   }, []);

   return (
      <div>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Booking ID</TableCell>
                     <TableCell align="center">Owner ID</TableCell>
                     <TableCell align="center">Property ID</TableCell>
                     <TableCell align="center">Tenent ID</TableCell>
                     <TableCell align="center">Tenent Name</TableCell>
                     <TableCell align="center">Tenent Contact</TableCell>
                     <TableCell align="center">Booking Status</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {allBookings.map((booking) => (
                     <TableRow
                        key={booking._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {booking._id}
                        </TableCell>
                        <TableCell align="center">{booking.ownerID}</TableCell>
                        <TableCell align="center">{booking.propertyId}</TableCell>
                        <TableCell align="center">{booking.userID}</TableCell>
                        <TableCell align="center">{booking.userName}</TableCell>
                        <TableCell align="center">{booking.phone}</TableCell>
                        <TableCell align="center">{booking.bookingStatus}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default AllBookings;