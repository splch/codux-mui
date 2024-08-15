import { createBoard } from '@wixc3/react-board';
import { CssBaseline, Typography, Container } from '@mui/material';
import cover from '../covers/css-baseline-light.png';

export default createBoard({
    name: 'MUICssBaseline',
    Board: () => (
        <>
            <CssBaseline />
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    CSS Baseline Applied
                </Typography>
                <Typography variant="body1">
                    This component applies a consistent baseline for all elements in your
                    application.
                </Typography>
            </Container>
        </>
    ),
    isSnippet: true,
    tags: ['Utils', 'MUI'],
    cover: cover,
});
