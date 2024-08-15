import { createBoard } from '@wixc3/react-board';
import { Chip } from '@mui/material';
import cover from '../covers/chip-light.png';

export default createBoard({
    name: 'MUIChip',
    Board: () => <Chip label="Clickable Chip" onClick={() => alert('Chip clicked!')} />,
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
