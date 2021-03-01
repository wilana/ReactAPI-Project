import { Card, CardContent, Container, Paper } from '@material-ui/core';
import React from 'react';
import Layout from './shared/Layout';

// Introduces your application
const Home = () => {
    return ( 
        <Layout title="Home">
            <Container className="m-2 text-center">
                <Container className="m-auto border">
                <h5 className="text-center p-2">A project by Wilana Matthews</h5>
                <p>This website gets Canadian Holidays from an API at: <a href="https://canada-holidays.ca/api">Canada-Holidays.ca</a></p>
                <p>It was made using the Create React App library, Bootstrap, and Material.</p>
                </Container>
                <Container className="p-5 small">
                <p>This is project that was made for COMP 2068</p>
                <p>View the code on <a href="https://github.com/wilana/ReactAPI-Project">GitHub</a></p>
                </Container>
            </Container>
            </Layout>
     );
}
 
export default Home;