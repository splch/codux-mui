import { createBoard } from '@wixc3/react-board';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/drawer-light.png';

export default createBoard({
    name: 'MUIDrawer',
    Board: () => {
        const [open, setOpen] = useState(false);

        const toggleDrawer = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if ((event as React.KeyboardEvent).type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            setOpen(state);
        };

        return (
            <>
                <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Drawer>
            </>
        );
    },
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
