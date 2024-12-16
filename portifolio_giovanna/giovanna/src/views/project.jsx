import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../consts";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Bounce } from "react-awesome-reveal";
import theme from "../theme";

function Project() {

    const { id } = useParams()
    const { title, src, longText, tags, } = projects[id];
    return <Stack bgcolor={"linear-gradient(175deg, rgba(69,103,183,1) 0%, rgba(100,149,237,1) 54%, rgba(122,40,138,1) 100%)"}>
        <Stack direction={"row"} width={"100%"}>
            <Bounce triggerOnce={true}>
                <img
                    src={theme.palette.mode == "dark" ? "../logo_white.svg" : "../logo.svg"}
                    alt="logo da marca Pfleger"
                    width="150px"
                    style={{
                        transition: "0.3s ease", // Transição suave
                    }}
                />

            </Bounce >
        </Stack>
        <Button variant="contained" onClick={() => window.location.pathname = ""}>
            <Stack direction="row">
                <ArrowBack />
                <Typography>
                    Voltar para Projetos
                </Typography>
            </Stack>
        </Button>

        <Typography variant="h1">
            {title}
        </Typography>
        <img src={src} alt="Imagem do projeto" style={{ width: "100%" }} />
        <Typography>
            {title}
        </Typography>


    </Stack>
}

export default Project