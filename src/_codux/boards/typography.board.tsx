import { createBoard } from '@wixc3/react-board';
import { Typography } from '@mui/material';
import cover from '../covers/typography-light.png';

export default createBoard({
    name: 'MUITypography',
    Board: () => (
        <Typography variant="h4" component="h2">
            This is an H4 heading
        </Typography>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
