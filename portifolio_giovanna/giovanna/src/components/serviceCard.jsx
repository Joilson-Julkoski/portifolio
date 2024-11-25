import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

function ServiceCard({ title, text }) {

    return <Box width={"46%"} sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,149,237,1) 22%, rgba(122,40,138,1) 37%, rgba(122,40,138,0) 100%);" }}>
        <Box width={"100%"} height={"100%"} bgcolor={theme.palette.primary.main} sx={{opacity: "0.9"}} padding={"24px"} boxSizing={"border-box"} borderLeft={"3px solid #4567B7"}>
            <Typography fontSize={"19px"} fontWeight={"bold"}>{title}</Typography>
            <Typography>{text}</Typography>
        </Box>
    </Box>
}

export default ServiceCard