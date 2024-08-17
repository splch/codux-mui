import { createBoard } from '@wixc3/react-board';
import { Button, ButtonGroup } from '@mui/material';
import cover from '../../covers/button-group-light.png';

export default createBoard({
    name: 'MUIButtonGroup',
    Board: () => (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    ),
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
