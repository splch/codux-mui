import { createBoard } from '@wixc3/react-board';
import HomeIcon from '@mui/icons-material/Home';
import cover from '../covers/material-icons-light.png';

export default createBoard({
    name: 'MUIMaterialIcons',
    Board: () => <HomeIcon />,
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
