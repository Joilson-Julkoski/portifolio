import logo from './logo.svg';
import './App.css';
import Main from './views/main';
import theme from './theme';
import { Box, Stack, ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"row"} justifyContent={"center"}>
        <Box maxWidth={"1220px"}>
          <Main />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
