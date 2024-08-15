import { createBoard } from '@wixc3/react-board';
import { NoSsr, Typography } from '@mui/material';
import cover from '../covers/no-ssr-light.png';

export default createBoard({
    name: 'MUINoSsr',
    Board: () => (
        <NoSsr>
            <Typography variant="h6">This text is rendered only on the client side.</Typography>
        </NoSsr>
    ),
    isSnippet: true,
    tags: ['Utils', 'MUI'],
    cover: cover,
});
