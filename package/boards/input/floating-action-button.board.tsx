import { createBoard } from '@wixc3/react-board';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import cover from '../../covers/fab-light.png';

export default createBoard({
    name: 'MUIFloatingActionButton',
    Board: () => (
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    ),
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
