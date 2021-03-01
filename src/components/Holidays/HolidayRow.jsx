import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import Provinces from './Provinces';
import { Link } from 'react-router-dom';

const HolidayRow = ({ row, index }) => {

    return (
        <>
            <TableRow>
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