import { createBoard } from '@wixc3/react-board';
import { Pagination } from '@mui/material';
import cover from '../covers/pagination-light.png';

export default createBoard({
    name: 'MUIPagination',
    Board: () => <Pagination count={10} color="primary" />,
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
