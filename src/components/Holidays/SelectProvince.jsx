import { makeStyles, FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@material-ui/core';
import React from 'react';

//https://material-ui.com/components/selects/
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectProvince = props => {
    const { province, setProvince } = props;

    const classes = useStyles();

    const handleChange = (event) => {
        setProvince(event.target.value);
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="provinces-select-label">Filter</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={province}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='AB'>Alberta</MenuItem>
                <MenuItem value='BC'>British Columbia</MenuItem>
                <MenuItem value='MB'>Manitoba</MenuItem>
                <MenuItem value='NB'>New Brunswick</MenuItem>
                <MenuItem value='NL'>Newfoundland and Labrador</MenuItem>
                <MenuItem value='NT'>Northwest Territories</MenuItem>
                <MenuItem value='NS'>Nova Scotia</MenuItem>
                <MenuItem value='NU'>Nunavut</MenuItem>
                <MenuItem value='ON'>Ontario</MenuItem>
                <MenuItem value='PE'>Prince Edward Island</MenuItem>
                <MenuItem value='QC'>Quebec</MenuItem>
                <MenuItem value='SK'>Saskatchewan</MenuItem>
                <MenuItem value='YT'>Yukon</MenuItem>
            </Select>
            <FormHelperText>Filter by Province/Territory</FormHelperText>
        </FormControl>
    );
}

export default SelectProvince;