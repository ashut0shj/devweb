import { useContext } from 'react';

//components
import Editor from './editor';

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider.jsx';

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () => {
// console.log("Hello");
    const { js, setJs } = useContext(DataContext);

    return (
        <Container>
            {/* <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            /> */}
            <Editor 
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>
    )
}

export default Code;