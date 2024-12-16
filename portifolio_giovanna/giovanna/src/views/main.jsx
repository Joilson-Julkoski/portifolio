import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ArrowOutward, Instagram, LinkedIn } from "@mui/icons-material";
import ServiceCard from "../components/serviceCard";
import ProjectCard from "../components/projectCard";
import { Bounce, Fade, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
import theme from "../theme";
import { projects } from "../consts";

function Main() {

    const [isHovered, setIsHovered] = useState(false);

    return <Stack gap={"80px"} direction={"column"}>
        <Stack direction={"row"} width={"100%"}>
            <Bounce triggerOnce={true}>
                <img
                    src={theme.palette.mode == "dark" ? "logo_white.svg" : "logo.svg"}
                    alt="logo da marca Pfleger"
                    width="150px"
                    style={{
                        transition: "0.3s ease", // Transição suave
                    }}
                />  

            </Bounce >
        </Stack>
        <Fade>

            <Stack gap={"24px"}>
                <Typography variant="h1">
                    Cada projeto é uma jornada:  do conceito à concretização
                </Typography>
                <Typography>
                    Me dedico a traduzir a essência e os objetivos da sua marca em identidade e presença. Com atenção a cada detalhe, transformo ideias em experiências que fazem a diferença.
                </Typography>
                <Button variant="contained">
                    <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                        <Typography>
                            Entre em contato
                        </Typography>
                        <ArrowOutward />
                    </Stack>
                </Button>
            </Stack>
        </Fade>
        <Fade>

            <Stack direction={"row"} gap={"24px"} flexWrap={"wrap"}>
                {Object.keys(projects).map((e) => (
                    <ProjectCard title={projects[e].title} tags={projects[e].tags} src={projects[e].src} text={projects[e].text} projectId={e}/>
                )
                )}
            </Stack>
        </Fade>
        <Fade>

            <Stack direction={"row"} alignItems={"center"} gap={"24px"}>

                <img
                    src="giovanna_colors.png"
                    alt="logo da marca Pfleger"
                    // width="150px"
                    style={{
                        transition: "all 0.3s ease", // Transição suave
                        filter: isHovered
                            ? "none"// Filtro ao passar o mouse
                            : "grayscale(1)", // Sem filtro
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                    onMouseEnter={() => setIsHovered(true)} // Ativa o filtro
                    onMouseLeave={() => setIsHovered(false)} // Remove o filtro
                />

                <Stack gap={"16px"}>
                    <Typography variant="h1">
                        Giovanna Pfleger
                    </Typography>
                    <Typography>
                        Designer dedicada a transformar ideias em identidades visuais que inspiram e conectam. Com experiência em design gráfico, branding e design de produto, meu trabalho é moldado pelo compromisso em cuidar de cada detalhe, respeitando a essência e os objetivos de cada marca. Acredito que design vai além da estética – é uma ferramenta para dar vida a histórias e criar conexões duradouras.
                    </Typography>
                </Stack>
            </Stack>
        </Fade>
        <Fade>

            <Stack gap={"48px"}>
                <Typography variant="h1">
                    Aqui é onde ideias encontram identidade e propósito.
                </Typography>

                <Stack direction={"row"} flexWrap={"wrap"} gap={"48px"}>
                    <ServiceCard title={"UX/UI Design"} text={"Na área de UX/UI Design, foco em criar interfaces intuitivas, com usabilidade e acessibilidade que proporcionem uma experiência agradável e eficiente, promovendo uma interação fluida entre pessoas e tecnologia"} />
                    <ServiceCard title={"Marketing"} text={"Por meio do marketing e do design gráfico, ajudo a construir e comunicar mensagens que representam o propósito e o diferencial de cada marca, promovendo uma conexão significativa com o público."} />
                    <ServiceCard title={"Brand Design"} text={"Como Brand Designer, meu objetivo é desenvolver identidades visuais que expressem a essência única de cada marca. Cada detalhe é pensado para fortalecer uma narrativa autêntica e envolvente."} />
                </Stack>
            </Stack>
        </Fade>
        <Fade>

            <Stack gap={"24px"} >
                <Typography variant="h1">
                    Peça um orçamento.
                </Typography>
                <Typography>
                    Se você quer desenvolver um projeto ou renovar sua marca, vamos conversar! Combinando sua visão com minha experiência em design, transformo ideias em soluções únicas. Vamos juntos trazer suas
                </Typography>
                <Button variant="contained">
                    <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                        <Typography>
                            Entre em contato
                        </Typography>
                        <ArrowOutward />
                    </Stack>
                </Button>
                <Stack marginY={"24px"} direction={"row-reverse"} gap={"16px"}>
                    <a href="https://br.linkedin.com/in/pfleger-mendes-designer-uxui" target="_blank">

                        <LinkedIn sx={{ color: theme.palette.secondary.main, fontSize: "24px" }} />
                    </a>
                    <a href="https://www.instagram.com/pfleger.mendes" target="_blank">
                        <Instagram sx={{ color: theme.palette.secondary.main, fontSize: "24px" }} />
                    </a>
                </Stack>
            </Stack>
        </Fade>

    </Stack>
}

export default Main

