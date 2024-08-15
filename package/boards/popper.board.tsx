import { createBoard } from '@wixc3/react-board';
import { Popper, Button, Typography, Paper } from '@mui/material';
import { useState, useRef } from 'react';

export default createBoard({
    name: 'MUIPopper',
    Board: () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const buttonRef = useRef(null);

        const handleClick = () => {
            setAnchorEl(anchorEl ? null : buttonRef.current);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;

        return (
            <div>
                <Button
                    ref={buttonRef}
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                >
                    Toggle Popper
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom">
                    <Paper sx={{ p: 2 }}>
                        <Typography>This is a popper content.</Typography>
                    </Paper>
                </Popper>
            </div>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
});
