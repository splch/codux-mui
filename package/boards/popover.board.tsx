import { createBoard } from '@wixc3/react-board';
import { Popover, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default createBoard({
    name: 'MUIPopover',
    Board: () => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        return (
            <div>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Open Popover
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography sx={{ p: 2 }}>This is a popover content.</Typography>
                </Popover>
            </div>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
});
