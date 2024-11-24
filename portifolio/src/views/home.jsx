import React from 'react';
import { Box, Button, Typography, Stack, ThemeProvider, Divider, Link } from '@mui/material';
import theme from '../muiTheme';
import Folder from '../components/folder';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack height={"100vh"} gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} bgcolor={"#171717"} padding={"20px"}>
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
                <Box width={"50vw"}>
                    <Typography color='#E8E8E8' fontSize={"52px"} textAlign={"center"} fontWeight={"600"}>
                        Me chamo <span style={{ color: '#FD853A' }}>Joilson Julkoski</span>, Desenvolvedor Full Stack
                    </Typography>
                    <Typography color='#E8E8E8' fontSize={"24px"} textAlign={"end"} fontWeight={"600"} >
                        2 anos de <Typography style={{ fontSize: "16px" }} fontWeight={"400"}>Experiência</Typography>
                    </Typography>
                </Box>
                <img style={{ position: "absolute", bottom: "0", width: "300px" }} src="charcter.svg" alt="" />
                <Stack direction={'row'} position={"absolute"}
                    background={"rgba(255, 255, 255, 0.1)"}
                    borderRadius={"16px"}
                    boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
                    border={"1px solid rgba(255, 255, 255, 0.3)"}
                    bottom={"15px"} style={{ backdropFilter: "blur(5px)", borderRadius: "50px", border: "1px solid white", gap: "16px", justifyContent: "space-between", padding: "4px", height: "60px" }}>
                    <Button variant='contained'>
                        <Typography>Portfolio </Typography>
                    </Button>
                    <Button variant='text'>
                        <Typography>Me contrate</Typography>
                    </Button>
                </Stack>
            </Stack>
            <Stack height={"100vh"} gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} bgcolor={"#171717"} paddingX={"54px"} paddingY={"54px"} sx={{ backgroundImage: "url('background.png')", backgroundSize: "cover" }}>

                <Stack direction={"row"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>

                    <Box maxWidth={"40%"}>
                        <Typography color='#E8E8E8' fontSize={"48px"} fontWeight={"400"} >
                            Meus projetos
                        </Typography>
                    </Box>
                    <Box maxWidth={"40%"}>
                        <Typography color='#E8E8E8' fontSize={"16px"} fontWeight={"400"} >
                            Aqui você encontrará uma seleção dos projetos que desenvolvi ao longo da minha carreira.
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction={"row"} gap={"16px"}>
                    <Folder />
                    <Folder />
                    <Folder />
                </Stack>
            </Stack>
            <Stack height={"100vh"} gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} bgcolor={"#171717"} paddingX={"54px"} paddingY={"54px"}>
                <Typography color='#E8E8E8' fontSize={"48px"} fontWeight={"400"} >
                    Tecnologias
                </Typography>

                <Stack direction={"row"} justifyContent={"space-around"} width={"100%"} height={"100%"}>
                    <Stack justifyContent={"space-between"} height={"100%"}>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                Tecnologia 1
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                2 anos de experiencia
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                Tecnologia 1
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                2 anos de experiencia
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                Tecnologia 1
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                2 anos de experiencia
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack justifyContent={"space-between"} height={"100%"} position={"relative"} alignItems={"center"}>
                        <Box height={"100%"} position={"absolute"} border={"2px dashed white"}></Box>
                        <Box sx={{ zIndex: '2', width: "30px", height: "30px", border: "2px solid white", borderRadius: "50px", bgcolor: "#FD853A" }} />
                        <Box sx={{ zIndex: '2', width: "30px", height: "30px", border: "2px solid white", borderRadius: "50px", bgcolor: "#353A84" }} />
                        <Box sx={{ zIndex: '2', width: "30px", height: "30px", border: "2px solid white", borderRadius: "50px", bgcolor: "#FD853A" }} />
                    </Stack>
                    <Stack justifyContent={"space-between"} height={"100%"}>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                Tecnologia 1
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                2 anos de experiencia
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                Tecnologia 1
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                2 anos de experiencia
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                Tecnologia 1
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "24px" }}>
                                2 anos de experiencia
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
            <Stack  gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} bgcolor={"#272727"} paddingX={"54px"} paddingY={"54px"}>
                <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                    <Typography sx={{ color: "white", fontSize: "48px" }}>
                        Entre em contato comigo
                    </Typography>
                    <Button variant='contained'>
                        <Stack direction={"row"}>
                            <Typography >Me contrate</Typography>
                        </Stack>
                        <ArrowOutwardIcon />
                    </Button>
                </Stack>
                <Divider sx={{ color: "#475467", width: "100%" }} />

                <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                    <Typography sx={{ color: "white", fontSize: "16px", width: "50%" }}>
                        Se você deseja saber mais sobre meus projetos ou discutir como podemos colaborar, não hesite em entrar em contato.
                        Estou sempre aberto a novas oportunidades e conversas!
                    </Typography>
                    <Stack sx={{ width: "50%", alignItems: "center" }}>
                        <Stack gap={"16px"}>

                            <Typography sx={{ color: "#FD853A", fontSize: "20px"}}>Contato</Typography>
                            <Typography sx={{ color: "white" }}>(47) 98416-7365</Typography>
                            <Typography sx={{ color: "white" }}>joilson7548@gmail.com</Typography>
                            <Link style={{textDecoration: "none" }} href="https://www.linkedin.com/in/joilson-julkoski/" target="_blank">
                                <Typography sx={{ color: "white", textDecoration: "none" }}> Likedin</Typography>
                            </Link>
                        </Stack>

                    </Stack>
                </Stack>

                <Divider sx={{ color: "#475467", width: "100%" }} />

            </Stack>
        </ThemeProvider>
    );
}

export default App;
