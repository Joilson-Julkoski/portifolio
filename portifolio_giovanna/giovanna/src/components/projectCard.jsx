import { ArrowOutward } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

function ProjectCard({ src, title, text, link, tags }) {
    // TODO: ver a responsividade desse flex
    return <Box
        className="projectCard"
        // width={"50%"}
        position={"relative"}
        flex={"1 1 48%"}
        height={"200px"}
        sx={{
            padding: "2px", // Espaçamento interno
            borderRadius: "32px", // Bordas arredondadas (opcional)
            background: "linear-gradient(175deg, rgba(69,103,183,1) 0%, rgba(100,149,237,1) 54%, rgba(122,40,138,1) 100%)",
            boxShadow: "0 0 0 4px transparent", // Cria a borda invisível
        }}
    >
        <Box zIndex={"1"} borderRadius={"100%"} position={"absolute"} top={"0"} right={"0"} width={"46px"} height={"46px"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ transform: "translate(30%, -30%)", background: "linear-gradient(175deg, rgba(69,103,183,1) 0%, rgba(100,149,237,1) 54%, rgba(122,40,138,1) 100%)" }}>
            <ArrowOutward sx={{ color: "white", fontSize: "29px" }} />
        </Box>
        <Box bgcolor={theme.palette.primary.main} height={"100%"} sx={{ opacity: "0.88", boxSizing: "border-box" }} borderRadius={"32px"} padding={"12px"}>



            <Stack direction={"row"} gap={"24px"}>

                <img src={src} style={{ height: "100%" }} alt="Imagem de referencia do projeto" />
                <Stack direction={"column"} justifyContent={"space-between"}>
                    <Stack direction={"column"}>
                        <Typography fontFamily={"Montserrat"} fontWeight={"bold"} fontSize={"18px"}>
                            {title}
                        </Typography>
                        <Typography sx={{ opacity: "80%", fontWeight: "bold", fontSize: "16px" }}>
                            {text}
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} gap={"16px"} marginBottom={"16px"}>
                        {tags.map((e, index) => (
                            <Box width={"fit-content"} bgcolor={"#4567B7"} padding={"2px 10px"} borderRadius={"150px"}> 
                                <Typography fontSize={"14px"}>
                                    {e}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    </Box>

}

export default ProjectCard