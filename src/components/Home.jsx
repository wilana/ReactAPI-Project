import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Layout from './shared/Layout';

// Introduces your application
const Home = () => {
    return ( 
        <Layout title="Home">
            <Container className="m-auto text-center">
                <Container className="m-5">
                <h5 className="text-center">Welcome</h5>
                <p>This website gets Canadian Holidays from an API at:</p>
                <p><a href="https://canada-holidays.ca/api">Canada-Holidays.ca</a></p>
                </Container>
                <Container className="m-5">
                <p>It was made for COMP 2068</p>
                <p>Last Updated: February 28th, 2021</p>
                </Container>
            </Container>
            </Layout>
     );
}
 
export default Home;