import { createBoard } from '@wixc3/react-board';
import { Stack, Button, Typography } from '@mui/material';
import cover from '../../covers/stack-light.png';

export default createBoard({
    name: 'MUIStack',
    Board: () => (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Button 1</Button>
            <Button variant="outlined">Button 2</Button>
            <Button variant="text">Button 3</Button>
        </Stack>
    ),
    isSnippet: true,
    tags: ['Layout', 'MUI'],
    cover: cover,
});
