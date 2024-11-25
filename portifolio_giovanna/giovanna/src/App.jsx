import logo from './logo.svg';
import './App.css';
import Main from './views/main';
import theme from './theme';
import { Box, Stack, ThemeProvider } from '@mui/material';
import AnimatedCursor from 'react-animated-cursor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './views/project';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedCursor
        innerSize={24}
        outerSize={24}
        color="122, 40, 138"
        outerAlpha={0.24}
        innerScale={0.7}
        outerScale={5}
        clickables={[".projectCard", "button", "a"]}
      />

      <Stack direction={"row"} justifyContent={"center"} bgcolor={theme.palette.primary.main}>
        <Box maxWidth={"1220px"}>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
            </Routes>
          </Router>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
