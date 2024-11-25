import { createTheme } from '@mui/material';


const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = createTheme({
    palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
            main: darkMode ? '#1D1D1D' : "#FFFFFF",
        },
        secondary: {
            main: darkMode ? "#FFFFFF" : '#1D1D1D',
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: "16px",
            color: darkMode ? "#FFFFFF" : '#1D1D1D',
        },
        h1: {
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontSize: '48px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '100px', // Bordas arredondadas
                    textTransform: 'none', // Remove o texto em caixa alta
                    fontWeight: 'bold', // Deixa o texto em negrito
                    width: "fit-content",
                    height: "48px",
                    fontSize: "16px"
                },
                contained: {
                    background: "rgb(69,103,183)",
                    background: darkMode ? "linear-gradient(175deg, rgba(69,103,183,0.2) 0%, rgba(100,149,237,0.2) 54%, rgba(122,40,138,0.2) 100%)"
                    :  "linear-gradient(175deg, rgba(69,103,183,1) 0%, rgba(100,149,237,1) 54%, rgba(122,40,138,1) 100%)",
                    color: '#FFFFFF', // Cor do texto
                    border: darkMode ? "1px solid #4567B7" : "none",
                    '&:hover': {
                        backgroundColor: '#333333', // Cor de fundo ao passar o mouse
                    },
                },
                outlined: {
                    borderColor: '#1D1D1D', // Cor da borda nos botões "outlined"
                    color: '#1D1D1D', // Cor do texto
                    '&:hover': {
                        borderColor: '#333333',
                        backgroundColor: '#F7F9FC',
                    },
                },
                text: {
                    color: '#1D1D1D', // Cor do texto nos botões "text"
                    '&:hover': {
                        backgroundColor: '#F7F9FC', // Fundo ao passar o mouse
                    },
                },
            },
        },
    }

});

export default theme
