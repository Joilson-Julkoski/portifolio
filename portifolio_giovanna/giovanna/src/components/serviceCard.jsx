import { Box, Typography } from "@mui/material";
import React from "react";

function ServiceCard({title, text}) {

    return <Box>
        <Typography>{title}</Typography>
        <Typography>{text}</Typography>
    </Box>
}

export default ServiceCard