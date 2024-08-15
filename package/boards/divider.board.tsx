import { createBoard } from '@wixc3/react-board';
import { Divider } from '@mui/material';
import cover from '../covers/divider-light.png';

export default createBoard({
    name: 'MUIDivider',
    Board: () => (
        <>
            <p>Text above the divider</p>
            <Divider />
            <p>Text below the divider</p>
        </>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
