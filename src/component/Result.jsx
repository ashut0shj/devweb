import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../context/DataProvider.jsx';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`

const Result = () => {

    const [src, setSrc] = useState('');
    const { js } = useContext(DataContext);

    const srcCode = `
        <script>
            <script>${js}</script>
        </script>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [js])

    return (
        <Container style={js ? null : {background: '#444857' }}>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </Container>
    )
}

export default Result;