import { createBoard } from '@wixc3/react-board';
import { CircularProgress, LinearProgress } from '@mui/material';
import cover from '../covers/progress-light.png';

export default createBoard({
    name: 'MUIProgress',
    Board: () => (
        <div>
            <CircularProgress />
            <LinearProgress />
        </div>
    ),
    isSnippet: true,
    tags: ['Feedback', 'MUI'],
    cover: cover,
});
