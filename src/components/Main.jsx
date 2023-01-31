import Message from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Alert, AlertTitle, Box, Button, Snackbar, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SERVER_IP } from '../App';
import logo from './../img/logo.png';
import './Main.css';
import {ArrowDownward, ArrowDownwardOutlined, ArrowDownwardSharp, Download, GitHub} from "@mui/icons-material";

export const Main = () => {
    const [state, setState] = useState({
        playerCount: 0,
        showCopiedNotification: false
    });

    function showCopiedAlert() {
        console.log('showing copy alert');
        setState(prevState => ({
            ...prevState,
            showCopiedNotification: true
        }));
    }

    function closeCopiedAlert() {
        setState(prevState => ({
            ...prevState,
            showCopiedNotification: false
        }));
    }

    function copyIpToClipboard() {
        navigator.clipboard.writeText(SERVER_IP);
        showCopiedAlert();
    }

    useEffect(() => {
        fetch(`https://api.mcsrvstat.us/2/${SERVER_IP}`)
            .then(res => res.json())
            .then(json =>
                setState({
                    playerCount: json.players.online ?? 0
                })
            );
    }, []);

    return (
        <div className="root">
            <Snackbar
                open={state.showCopiedNotification}
                autoHideDuration={3000}
                onClose={closeCopiedAlert}
            >
                <Alert severity="success" onClose={closeCopiedAlert}>
                    <AlertTitle>IP copied!</AlertTitle>
                    The server IP was copied to your clipboard.
                </Alert>
            </Snackbar>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="#fff"
                backgroundColor="rgb(30, 30, 30)"
                padding="0.2in"
                width="600px"
                borderRadius="5px"
                sx={{ boxShadow: 20 }}
            >
                <div class="main-text-container">

                    <Typography variant="h3" component="h1" className="title" align="center">
                        Dylan Spigot
                    </Typography>
                </div>

                <Typography variant="subtitle1" component="p" className="subtitle" align="center">
                    The best Minecraft server software.
                </Typography>


                <span>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ mr: 0.5 }}
                        href={`https://github.com/TNTTheNoob/dylanspigotdownloads/releases/latest`}
                    >
                        <Download sx={{ mr: 0.5 }} />
                        Download
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ mr: 0.5 }}
                        href="https://discord.com"
                    >
                        <Message sx={{ mr: 0.5 }} />
                        Discord
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ mr: 0.5 }}
                        href={`https://github.com/TNTTheNoob`}
                    >
                        <GitHub sx={{ mr: 0.5 }} />
                        GitHub
                    </Button>
                </span>
            </Box>
        </div>
    );
};
