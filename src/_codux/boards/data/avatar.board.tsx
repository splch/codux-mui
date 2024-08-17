import { createBoard } from '@wixc3/react-board';
import { Avatar } from '@mui/material';
import cover from '../../covers/avatar-light.png';

export default createBoard({
    name: 'MUIAvatar',
    Board: () => <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
