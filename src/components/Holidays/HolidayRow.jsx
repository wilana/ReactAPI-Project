import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import Provinces from './Provinces';
import { Link } from 'react-router-dom';

const HolidayRow = ({row, index }) => {
    const isolate = (row) => {

        console.log('Clicked ' + row.nameEn);


        <Link />
    };

    return ( 
        <>
            <TableRow onClick={isolate}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nameEn}</TableCell>
                <TableCell>{row.date}</TableCell>
                    <Provinces 
                        row={row} 
                    />
            </TableRow>
        </>
     );
}
 
export default HolidayRow;