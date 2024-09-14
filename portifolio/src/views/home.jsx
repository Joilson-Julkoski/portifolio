import React from 'react';
import { Box, Button, Typography, Stack, ThemeProvider } from '@mui/material';
import theme from '../muiTheme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack height={"100vh"} gap={"36px"} width={"100%"} alignItems={"center"} bgcolor={"#171717"} padding={"20px"}>
                <Stack direction={'row'} style={{ borderRadius: "50px", border: "1px solid white", width: "100%", justifyContent: "space-between", padding: "4px", height: "60px" }}>
                    <Button variant='contained'>
                        <Typography>Home</Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography>Projetos</Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography>Tecnologias</Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography>Contato</Typography>
                    </Button>
                </Stack>
                <Stack bgcolor={"#2e2e2e"} borderRadius={"32px"} paddingX={"24px"} paddingY={"8px"}>
                    <Typography color='#E8E8E8'>
                        Olá!
                    </Typography>
                </Stack>
                <Typography color='#E8E8E8'>
                    Me chamo <span style={{color: '#FD853A'}}>Joilson Julkoski</span>, Desenvolvedor Full Stack 
                </Typography>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
