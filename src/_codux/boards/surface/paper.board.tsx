import { createBoard } from '@wixc3/react-board';
import { Paper, Typography } from '@mui/material';
import cover from '../../covers/paper-light.png';

export default createBoard({
    name: 'MUIPaper',
    Board: () => (
        <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" component="div">
                Paper Component
            </Typography>
            <Typography variant="body2">
                This is a sample content inside the paper component.
            </Typography>
        </Paper>
    ),
    isSnippet: true,
    tags: ['Surface', 'MUI'],
    cover: cover,
});
