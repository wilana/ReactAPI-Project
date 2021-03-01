import { Container } from '@material-ui/core';
import React from 'react';
import Layout from './shared/Layout';

// Instructions/Insight into what your application does
const About = () => {
    return ( 
        <Layout title="About">
            <Container className="m-auto">
                <h5 className="text-center">How to interact with the data:</h5>
                <Container className="m-5">
                    <h6>Sort</h6>
                    <p>Click the top of the column to sort by type.</p>
                    <p>For example, click 'Provinces/Territories' to sort by number of Provinces/Territories</p>
                </Container>
                <Container className="m-5">
                    <h6>Filter</h6>
                    <p>Select a Province/Territory from the dropdown above the table.</p>
                    <p>For example: select Alberta to see only Holidays listed as celebrated in Alberta</p>
                    <p className="small">Note: This does not include Federal (because of inconsistencies from the API).</p>
                </Container>
            </Container>
        </Layout>
     );
}
 
export default About;