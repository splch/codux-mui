import { createBoard } from '@wixc3/react-board';
import { Button } from '@mui/material';
import cover from '../covers/button-light.png';

export default createBoard({
    name: 'MUIButton',
    Board: () => <Button variant="contained">Click Me</Button>,
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
