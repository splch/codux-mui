import { createBoard } from '@wixc3/react-board';
import { TextField } from '@mui/material';
import cover from '../../covers/text-field-light.png';

export default createBoard({
    name: 'MUITextField',
    Board: () => <TextField label="Text Field" variant="outlined" />,
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
