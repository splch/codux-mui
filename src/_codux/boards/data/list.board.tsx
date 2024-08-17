import { createBoard } from '@wixc3/react-board';
import { List, ListItem, ListItemText } from '@mui/material';
import cover from '../../covers/list-light.png';

export default createBoard({
    name: 'MUIList',
    Board: () => (
        <List>
            <ListItem>
                <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Item 2" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Item 3" />
            </ListItem>
        </List>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
