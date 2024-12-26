import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Stack, ThemeProvider, Divider, Link } from '@mui/material';
import theme from '../muiTheme';
import Folder from '../components/folder';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '@google/model-viewer';
import MenuBar from '../components/menubar';
import { useMobile } from '../providers/screenSize';

function App() {

    const { isMobile } = useMobile()

    return (
        <ThemeProvider theme={theme}>
            <Stack direction={"column"} alignItems={"center"} width={"100%"} bgcolor={"#171717"}>

                <Stack id="home" maxWidth={"1128px"} height={"100vh"} gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} padding={"20px"}>
                    <Box height={"80px"} ></Box>
                    <MenuBar />


                    <Stack bgcolor={"#2e2e2e"} borderRadius={"32px"} paddingX={"24px"} paddingY={"8px"}>
                        <Typography color='#E8E8E8'>
                            Olá!
                        </Typography>
                    </Stack>
                    <Stack direction={"column"}>

                        <Box width={"100%"}>
                            <Typography color='#E8E8E8' fontSize={isMobile ? "42px" : "52px"} textAlign={"center"} fontWeight={"600"}>
                                Me chamo <span style={{ color: '#FD853A' }}>Joilson Julkoski</span>, Desenvolvedor Full Stack
                            </Typography>
                            <Typography color='#E8E8E8' fontSize={"24px"} textAlign={"end"} fontWeight={"600"} >
                                2 anos de <Typography style={{ fontSize: "16px" }} fontWeight={"400"}>Experiência</Typography>
                            </Typography>
                        </Box>
                        <model-viewer
                            src="old_pc.glb"
                            alt="Um modelo 3D de exemplo"
                            auto-rotate
                            camera-controls
                            environment-image="whipple_creek_regional_park_04_1k.hdr"
                            tone-mapping="neutral"
                            disable-tap
                            camera-orbit="75deg 95deg 6m"
                            disable-zoom
                            style={{ width: '100%', height: '300px' }}

                        />
                    </Stack>

                    {/* <img style={{ position: "absolute", bottom: "0", width: "300px" }} src="charcter.svg" alt="" /> */}
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
            </Stack>
            <Stack direction={"column"} alignItems={"center"} width={"100%"} bgcolor={"#171717"} sx={{ backgroundImage: "url('background.png')", backgroundSize: "cover" }}>

                <Stack id="projects" maxWidth={"1128px"} minHeight={"100vh"} gap={"36px"} width={"100%"} justifyContent={"center"} overflow={"hidden"} alignItems={"center"} paddingX={"54px"} paddingY={"54px"} >

                    <Stack direction={isMobile ? "column" : "row"} alignItems={"center"} gap={"16px"} width={"100%"} justifyContent={"space-between"}>

                        <Box maxWidth={isMobile ? "100%" : "40%"}>
                            <Typography color='#E8E8E8' fontSize={"48px"} fontWeight={"400"} lineHeight={1}>
                                Meus projetos
                            </Typography>
                        </Box>
                        <Box maxWidth={isMobile ? "100%" : "40%"}>
                            <Typography color='#E8E8E8' fontSize={"16px"} fontWeight={"400"} >
                                Aqui você encontrará uma seleção dos projetos que desenvolvi ao longo da minha carreira.
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction={isMobile ? "column" : "row"} gap={"16px"}>
                        <Folder />
                        <Folder />
                        <Folder />
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={"column"} alignItems={"center"} width={"100%"} bgcolor={"#171717"}>

                <Stack id="techs" maxWidth={"1128px"} height={"100vh"} gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} bgcolor={"#171717"} paddingX={"54px"} paddingY={"54px"}>
                    <Typography color='#E8E8E8' fontSize={"48px"} fontWeight={"400"} >
                        Tecnologias
                    </Typography>

                    <Stack direction={"row"} justifyContent={"space-around"} width={"100%"} height={"100%"} gap={"8px"}>
                        <Stack justifyContent={"space-between"} height={"100%"}  >
                            <Box>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                    Python
                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                    2 anos de experiencia
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                    NodeJs
                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                    1 ano de experiencia
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

                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>

                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                    ReactJs
                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>
                                    1 anos de experiencia
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>

                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "24px" }}>

                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={"column"} alignItems={"center"} width={"100%"} bgcolor={"#272727"}>

                <Stack id="contact" maxWidth={"1128px"} gap={"36px"} width={"100%"} overflow={"hidden"} alignItems={"center"} bgcolor={"#272727"} paddingX={"54px"} paddingY={"54px"}>
                    <Stack direction={isMobile ? "column" : "row"} gap={"32px"} justifyContent={"space-between"} width={"100%"}>
                        <Typography sx={{ color: "white", fontSize: "48px", lineHeight: "1" }}>
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

                    <Stack direction={isMobile ? "column" : "row"} gap={"16px"} alignItems={"center"}>


                        <Typography sx={{ color: "white", fontSize: "16px", minWidth: "50%" }}>
                            Se você deseja saber mais sobre meus projetos ou discutir como podemos colaborar, não hesite em entrar em contato.
                            Estou sempre aberto a novas oportunidades e conversas!
                        </Typography>
                        <Stack sx={{ minWidth: "50%", width: "100%", alignItems: "center" }}>
                            <Stack gap={"16px"} width="100%">

                                <Typography sx={{ color: "#FD853A", fontSize: "20px" }}>Contato</Typography>
                                <Typography sx={{ color: "white" }}>(47) 98416-7365</Typography>
                                <Typography sx={{ color: "white" }}>joilson7548@gmail.com</Typography>
                                <Link style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/joilson-julkoski/" target="_blank">
                                    <Typography sx={{ color: "white", textDecoration: "none" }}> Linkedin</Typography>
                                </Link>
                            </Stack>

                        </Stack>
                    </Stack>

                    <Divider sx={{ color: "#475467", width: "100%" }} />

                </Stack>
            </Stack>

        </ThemeProvider >
    );
}

export default App;
