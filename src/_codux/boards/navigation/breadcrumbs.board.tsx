import { createBoard } from '@wixc3/react-board';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import cover from '../../covers/breadcrumbs-light.png';

export default createBoard({
    name: 'MUIBreadcrumbs',
    Board: () => (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Link underline="hover" color="inherit" href="/getting-started/installation/">
                Core
            </Link>
            <Typography color="text.primary">Breadcrumb</Typography>
        </Breadcrumbs>
    ),
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
