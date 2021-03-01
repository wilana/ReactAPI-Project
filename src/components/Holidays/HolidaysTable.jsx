import React, { useMemo, useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../shared/Layout';
import axios from 'axios';
import HolidayRow from './HolidayRow';
import SelectProvince from './SelectProvince';

// from material-ui for table
const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});


const HolidaysTable = () => {
    // state variable for api
    const [data, setData] = useState([]);
    // state variable to keep track of filtered provinces with useEffect
    const [province, setProvince] = useState("");
    // state variable to keep track of order
    const [order, setOrder] = useState(true);
    // listen for changes to data
    const holidays = useMemo(() => data, [data]);

    // from material-ui
    const classes = useStyles();

    // get holidays from api
    useEffect(() => {
        axios.get('https://canada-holidays.ca/api/v1/holidays?year=2021')
            .then(resp => {
                //returns an array called holidays
                setData(resp.data.holidays);
            });
    }, []);

    // filter by province on change of the province state variable
    useEffect(() => {
        console.log('Province changed');

        // filter holidays using containsProvince function
        const filtered = holidays.filter(holiday => containsProvince(holiday));

        // none selected
        if (province === "") {
            setData(data);
        }
        // a province selected
        else {
            setData(filtered);
        }
    }, [province]);

    // filter provinces in holiday to find if the province is contained
    const containsProvince = holiday => {
        // filter provinces for just the one matching the requested province
        const provinces = holiday.provinces.filter(p => p.id === province);

        // provinces will have length > 0 when the province is contained
        if (provinces.length > 0) return true;
        else return false;
    }

    // sort holidays by type (when column header is clicked)
    const clickSort = type => {
        console.log('Sort by ' + type);
        let sorted = [...data].sort((a, b) => compare(a[type], b[type]));

        if(order) {
            sorted = sorted.reverse();
            setOrder(false);
        }
        else {
            setOrder(true);
        }
        setData(sorted);
    };

    // compares for use in sort function above
    const compare = (a, b) => {
        // Got help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    return (
        <Layout title="Canadian Holidays">

            <div className="d-flex justify-content-between align-items-center">
                <SelectProvince province={province} setProvince={setProvince} />
                <span className="badge badge-pill badge-secondary">Holidays Loaded: {data.length}</span>
            </div>

            <Table className={classes.table} aria-label="Canadian Holidays">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={() => clickSort('id')} >#</TableCell>
                        <TableCell onClick={() => clickSort('nameEn')} >Name</TableCell>
                        <TableCell onClick={() => clickSort('date')} >Date</TableCell>
                        <TableCell onClick={() => clickSort('provinces')}>Provinces/Territories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {holidays.map((row, index) => (
                        <HolidayRow row={row} key={index} />
                    ))}
                </TableBody>
            </Table>
        </Layout>
    );
};

export default HolidaysTable;