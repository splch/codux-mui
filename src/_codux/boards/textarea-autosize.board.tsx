import { createBoard } from '@wixc3/react-board';
import { TextareaAutosize } from '@mui/material';
import cover from '../covers/textarea-autosize-light.png';

export default createBoard({
    name: 'MUITextareaAutosize',
    Board: () => (
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Type something here..."
            style={{ width: '100%', padding: '8px' }}
        />
    ),
    isSnippet: true,
    tags: ['Utils', 'MUI'],
    cover: cover,
});
