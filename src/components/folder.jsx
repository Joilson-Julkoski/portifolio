import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Folder() {

    return <Stack sx={{ position: "relative", backdropFilter: 'blur(5px)', backgroundColor: "rgba(255, 255, 255, 0.12)", borderRadius: "24px", border: "1px solid white", overflow: "hidden", width: "100%"}}>
        <Box paddingY={"36px"} paddingX={"16px"} borderBottom={"1px solid white"}>
            <Typography color="white" fontSize={"24px"}>
                Softwares
            </Typography>
        </Box>
        <Stack sx={{marginTop: "16px", alignItems: "center"}}>
            <Box sx={{borderRadius: "24px 24px 0 0 ", width: "60%", height: "16px", bgcolor: "#757575"}}/>
            <Box sx={{borderRadius: "24px 24px 0 0 ", width: "80%", height: "16px", bgcolor: "#9E9D9D"}}/>
        </Stack>
        <img src="https://placehold.co/600x400" alt="" style={{ width: "100%",  borderRadius: "24px" }} />

        <IconButton sx={{ position: "absolute", bottom: 0, right: 0, width: "40px", bgcolor: "#353A84", border: '2px solid transparent', }}>
            <ArrowOutwardIcon sx={{ color: "white" }} />
        </IconButton>

    </Stack>
}

export default Folder