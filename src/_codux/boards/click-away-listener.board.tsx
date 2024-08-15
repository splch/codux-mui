import { createBoard } from '@wixc3/react-board';
import { ClickAwayListener, Button, Typography } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/click-away-listener-light.png';

export default createBoard({
    name: 'MUIClickAwayListener',
    Board: () => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen((prev) => !prev);
        };

        const handleClickAway = () => {
            setOpen(false);
        };

        return (
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <Button onClick={handleClick}>Toggle Message</Button>
                    {open && (
                        <Typography variant="body1">Click outside to hide this message.</Typography>
                    )}
                </div>
            </ClickAwayListener>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
    cover: cover,
});
