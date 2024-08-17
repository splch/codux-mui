import { createBoard } from '@wixc3/react-board';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import cover from '../../covers/appbar-light.png';

export default createBoard({
    name: 'MUIAppBar',
    Board: () => (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    App Bar Title
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    ),
    isSnippet: true,
    tags: ['Surface', 'MUI'],
    cover: cover,
});
