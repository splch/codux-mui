import { createBoard } from '@wixc3/react-board';
import { Link, Typography } from '@mui/material';
import cover from '../../covers/link-light.png';

export default createBoard({
    name: 'MUILink',
    Board: () => (
        <Typography>
            <Link href="https://mui.com/" target="_blank" rel="noopener">
                Visit Material UI
            </Link>
        </Typography>
    ),
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
