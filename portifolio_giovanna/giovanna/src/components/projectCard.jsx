import { ArrowOutward } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function ProjectCard({ src, title, text, link, tags }) {
    // TODO: ver a responsividade desse flex
    return <Box
        width={"100%"}
        position={"relative"}
        flex={"1 1 50%"}
        sx={{
            padding: "2px", // Espaçamento interno
            borderRadius: "8px", // Bordas arredondadas (opcional)
            background: "linear-gradient(175deg, rgba(69,103,183,1) 0%, rgba(100,149,237,1) 54%, rgba(122,40,138,1) 100%)",
            boxShadow: "0 0 0 4px transparent", // Cria a borda invisível
        }}
    >
        <Box bgcolor={"white"} borderRadius={"8px"}>

            <Box borderRadius={"100%"} position={"absolute"} top={"0"} right={"0"}>
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
    </Box>

}

export default ProjectCard