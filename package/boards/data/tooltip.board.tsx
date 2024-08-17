import { createBoard } from '@wixc3/react-board';
import { Tooltip, Button } from '@mui/material';
import cover from '../../covers/tooltip-light.png';

export default createBoard({
    name: 'MUITooltip',
    Board: () => (
        <Tooltip title="Delete">
            <Button>Hover me</Button>
        </Tooltip>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
