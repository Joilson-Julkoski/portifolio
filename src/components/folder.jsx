import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Folder() {

    return <Stack sx={{ position: "relative", backdropFilter: 'blur(5px)', backgroundColor: "rgba(255, 255, 255, 0.12)", borderRadius: "24px", border: "1px solid white", overflow: "hidden", width: "100%" }}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} paddingY={"36px"} paddingX={"16px"} borderBottom={"1px solid white"}>
            <Typography color="white" fontSize={"24px"}>
                Em breve...
            </Typography>
            <IconButton sx={{ width: "60px", height: "60px", bgcolor: "#353A84", border: '2px solid transparent', }}>
                <ArrowOutwardIcon sx={{ color: "white" }} />
            </IconButton>
        </Stack>
        <Stack sx={{ marginTop: "16px", alignItems: "center" }}>
            <Box sx={{ borderRadius: "24px 24px 0 0 ", width: "60%", height: "16px", bgcolor: "#757575" }} />
            <Box sx={{ borderRadius: "24px 24px 0 0 ", width: "80%", height: "16px", bgcolor: "#9E9D9D" }} />
        </Stack>
        <img src="https://placehold.co/600x400?text=Em+Breve..." alt="" style={{ width: "100%", borderRadius: "24px" }} />


    </Stack>
}

export default Folder