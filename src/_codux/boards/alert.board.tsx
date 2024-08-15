import { createBoard } from '@wixc3/react-board';
import { Alert } from '@mui/material';
import cover from '../covers/alert-light.png';

export default createBoard({
    name: 'MUIAlert',
    Board: () => <Alert severity="warning">This is a warning alert!</Alert>,
    isSnippet: true,
    tags: ['Feedback', 'MUI'],
    cover: cover,
});
