import { createBoard } from '@wixc3/react-board';
import { Box, Typography } from '@mui/material';
import cover from '../covers/box-light.png';

export default createBoard({
    name: 'MUIBox',
    Board: () => (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>
            <Typography variant="h6">This is a Box</Typography>
            <Typography variant="body1">
                Box component with padding, background color, and border radius.
            </Typography>
        </Box>
    ),
    isSnippet: true,
    tags: ['Layout', 'MUI'],
    cover: cover,
});
