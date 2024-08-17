import { createBoard } from '@wixc3/react-board';
import { Badge, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import cover from '../../covers/badge-light.png';

export default createBoard({
    name: 'MUIBadge',
    Board: () => (
        <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
        </IconButton>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
