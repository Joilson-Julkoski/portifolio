import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../consts";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

function Project() {

    const { id } = useParams()
    const { title, src, longText, tags, } = projects[id];
    return <Stack>

        <Button variant="contained">
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