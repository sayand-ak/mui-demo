import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Container } from '@mui/material';
import ColorCards from './components/ColorCards';

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1, minHeight: '100vh', bgcolor:"#212121"}}>
            <AppBar color='' position='relative'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 1, color: "white" }}
                    >
                        <Brightness7Icon />    
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white" }}>
                        Color Mate
                    </Typography>
                    <Button sx={{ color: "white" }}>Login</Button>
                </Toolbar>
            </AppBar>

            <Container sx={{paddingTop: '40px', paddingBottom: '40px'}}>
                <ColorCards />


            </Container>
        </Box>
    );
}
