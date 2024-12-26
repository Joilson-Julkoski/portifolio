import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMobile } from "../providers/screenSize";
import { Close, MenuBook, MenuOutlined } from "@mui/icons-material";

function MenuBar() {

    const { isMobile } = useMobile()

    const [section, setSection] = useState("home")
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [show, setShow] = useState(true);

    const [isOpen, setOpen] = useState(false)

    const handleSelectSection = (section) => {
        setSection(section)
        setOpen(false)
        if (section != "home") {
            setTimeout(() => setShow(false), 500)
        }

    }

    const sectionUpdateOnScroll = () => {
        const sections = [document.getElementById("home"), document.getElementById("projects"), document.getElementById("techs"), document.getElementById("contact")]

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            // Verifica se a seção está no topo da viewport ou passou por ele
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                setSection(section.id)
                console.log(`Você está na seção: ${section.id}`);
            }
        });
    };

    const handleScroll = () => {
        sectionUpdateOnScroll()
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY && currentScrollY > 60) {
            // Scrollando para baixo, ocultar
            setShow(false);
        } else if (currentScrollY < prevScrollY) {
            // Scrollando para cima, mostrar
            setShow(true);
        }

        setPrevScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    const buttons = () => {

        return <>
            <Button variant={section == "home" ? 'contained' : "text"} href='#home' onClick={() => handleSelectSection("home")}>
                <Typography>Home</Typography>
            </Button>
            <Button variant={section == "projects" ? 'contained' : "text"} href='#projects' onClick={() => handleSelectSection("projects")}>
                <Typography>Projetos</Typography>
            </Button>
            <Button variant={section == "techs" ? 'contained' : "text"} href='#techs' onClick={() => handleSelectSection("techs")}>
                <Typography>Tecnologias</Typography>
            </Button>
            <Button variant={section == "contact" ? 'contained' : "text"} href='#contact' onClick={() => handleSelectSection("contact")}>
                <Typography>Contato</Typography>
            </Button>
        </>
    }


    const mobile = () => {

        if (!isOpen) {

            return <Stack position={"fixed"} maxWidth={"1128px"} marginX={"16px"} direction={'row'} width={"98%"} style={{
                transform: show ? 'translateY(0)' : 'translateY(-150%)', transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', // Esconde quando scroll para baixo
                zIndex: "2",
            }}>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuOutlined sx={{ color: "#E8E8E8" }} />
                </IconButton>
            </Stack>

        } else {

            return <Stack style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                zIndex: "3",
                backgroundColor: "rgba(0,0,0,0.9)",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                backdropFilter: "blur(10px)"
            }}>
                <IconButton sx={{position: "absolute", top: 0, right: 0}} onClick={() => setOpen(false)}>
                    <Close sx={{color: "#E8E8E8"}}/>
                </IconButton>
                {buttons()}

            </Stack>
        }
    }

    const desktop = () => {

        return <Stack position={"fixed"} maxWidth={"1128px"} marginX={"16px"} direction={'row'} width={"98%"} style={{
            transform: show ? 'translateY(0)' : 'translateY(-150%)', transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', // Esconde quando scroll para baixo
            zIndex: "2",
        }}>
            <Stack direction={"row"} style={{
                backdropFilter: "blur(5px)", borderRadius: "50px", border: "1px solid white", width: "100%", justifyContent: "space-between", padding: "4px", height: "60px"
            }}>
                {buttons()}
            </Stack>
        </Stack>
    }

    return <>
        {isMobile ? mobile() : desktop()}
    </>

}

export default MenuBar