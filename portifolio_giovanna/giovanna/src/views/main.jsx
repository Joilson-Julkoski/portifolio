import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import ServiceCard from "../components/serviceCard";
import ProjectCard from "../components/projectCard";

function Main() {
    return <Stack gap={"80px"} direction={"column"}>
        <Stack direction={"row"} width={"100%"}>
            <img src="logo.png" alt="logo da marca Pfleger" />
        </Stack>
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
        <Stack direction={"row"} flexWrap={"wrap"}>
            <ProjectCard title={"Travelgram"} text={"Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"} />
            <ProjectCard title={"Travelgram"} text={"Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"} />
            <ProjectCard title={"Travelgram"} text={"Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"} />
            <ProjectCard title={"Travelgram"} text={"Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"} />
        </Stack>

        <Stack direction={"row"}>

            <img src="" alt="foto giovanna pfleger" />
            <Stack>
                <Typography variant="h1">
                    Giovanna Pfleger
                </Typography>
                <Typography>
                    Designer dedicada a transformar ideias em identidades visuais que inspiram e conectam. Com experiência em design gráfico, branding e design de produto, meu trabalho é moldado pelo compromisso em cuidar de cada detalhe, respeitando a essência e os objetivos de cada marca. Acredito que design vai além da estética – é uma ferramenta para dar vida a histórias e criar conexões duradouras.
                </Typography>
            </Stack>
        </Stack>
        <Stack>
            <Typography variant="h1">
                Aqui é onde ideias encontram identidade e propósito.
            </Typography>

            <Stack direction={"row"}>
                <ServiceCard title={"Marketing"} text={"Por meio do marketing e do design gráfico, ajudo a construir e comunicar mensagens que representam o propósito e o diferencial de cada marca, promovendo uma conexão significativa com o público."} />
                <ServiceCard title={"Brand Design"} text={"Como Brand Designer, meu objetivo é desenvolver identidades visuais que expressem a essência única de cada marca. Cada detalhe é pensado para fortalecer uma narrativa autêntica e envolvente."} />
                <ServiceCard title={"UX/UI Design"} text={"Na área de UX/UI Design, foco em criar interfaces intuitivas, com usabilidade e acessibilidade que proporcionem uma experiência agradável e eficiente, promovendo uma interação fluida entre pessoas e tecnologia"} />
            </Stack>
        </Stack>

        <Stack>
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
        </Stack>
    </Stack>
}

export default Main