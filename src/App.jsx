import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

export const SERVER_IP = 'dylanspigot.men';
export const SERVER_DISCORD = 'https://discord.dylanspigot.men';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: ['Mona-Sans', 'sans-serif'].join(',')
    }
});

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Main />
    </ThemeProvider>
);
