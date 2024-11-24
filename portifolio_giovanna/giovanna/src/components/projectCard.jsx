import { ArrowOutward } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function ProjectCard({ src, title, text, link, tags }) {
    return <Box width={"100%"} position={"relative"}>
        <Box borderRadius={"100%"} position={"absolute"} top={0} right={0}>
            <ArrowOutward />
        </Box>

        <Stack direction={"row"}>

            <img src={src} alt="Imagem de referencia do projeto" />
            <Stack direction={"column"}>
                <Stack direction={"column"}>
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        {text}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    {tags}
                </Stack>
            </Stack>
        </Stack>
    </Box>

}

export default ProjectCard