import { Container, Paper } from '@material-ui/core';
import React from 'react';
import Layout from './shared/Layout';

// Instructions/Insight into what your application does
const About = () => {
    return (
        <Layout title="About">
            <Container className="m-auto p-3">
                <h5 className="text-center">To Interact With The Data:</h5>
                <Paper className="m-5 p-3">
                    <h6>Sort</h6>
                    <p>Click the top of the column to sort by type in both ascending and descending order.</p>
                    <p>For example, click 'Provinces/Territories' to sort by number of Provinces/Territories</p>
                </Paper>
                <Paper className="m-5 p-3">
                    <h6>Filter</h6>
                    <p>Select a Province/Territory from the dropdown above the table.</p>
                    <p>For example: select Alberta to see only Holidays listed as celebrated in Alberta</p>
                    <p className="small">Note: This does not include Federal (because of inconsistencies from the API).</p>
                </Paper>
            </Container>
        </Layout>
    );
}

export default About;