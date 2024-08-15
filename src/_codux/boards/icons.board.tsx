import { createBoard } from '@wixc3/react-board';
import { Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import cover from '../covers/icons-light.png';

export default createBoard({
    name: 'MUIIcons',
    Board: () => (
        <Icon>
            <HomeIcon />
        </Icon>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
