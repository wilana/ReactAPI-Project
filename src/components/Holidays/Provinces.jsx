import { TableCell } from '@material-ui/core';
import React from 'react';


const Provinces = ({ row }) => {



    return (
        <TableCell>
            { (
                (row.provinces).map(province => (
                    ' ' + province.nameEn
                )) +
                (row.federal === 1 ? ' (Federal)' : '')
            )}
        </TableCell>
    )
}

export default Provinces;