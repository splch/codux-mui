import { createBoard } from '@wixc3/react-board';
import { Container, Typography } from '@mui/material';
import cover from '../../covers/container-light.png';

export default createBoard({
    name: 'MUIContainer',
    Board: () => (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                This is a Container
            </Typography>
            <Typography variant="body1">
                Container component that centers content horizontally. You can adjust its width with
                the maxWidth property.
            </Typography>
        </Container>
    ),
    isSnippet: true,
    tags: ['Layout', 'MUI'],
    cover: cover,
});
