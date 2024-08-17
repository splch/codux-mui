import { createBoard } from '@wixc3/react-board';
import { Skeleton } from '@mui/material';
import cover from '../../covers/skeleton-light.png';

export default createBoard({
    name: 'MUISkeleton',
    Board: () => (
        <div>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </div>
    ),
    isSnippet: true,
    tags: ['Feedback', 'MUI'],
    cover: cover,
});
