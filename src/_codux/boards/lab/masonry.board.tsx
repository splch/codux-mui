import { createBoard } from '@wixc3/react-board';
import { Masonry } from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import cover from '../../covers/masonry-light.png';

export default createBoard({
    name: 'MUIMasonry',
    Board: () => (
        <Masonry columns={3} spacing={2}>
            {Array.from(Array(6)).map((_, index) => (
                <Paper key={index} sx={{ p: 2 }}>
                    <Typography variant="body1">Masonry Item {index + 1}</Typography>
                </Paper>
            ))}
        </Masonry>
    ),
    isSnippet: true,
    tags: ['Lab', 'MUI'],
    cover: cover,
});
