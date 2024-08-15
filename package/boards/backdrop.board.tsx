import { createBoard } from '@wixc3/react-board';
import { Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/backdrop-light.png';

export default createBoard({
    name: 'MUIBackdrop',
    Board: () => {
        const [open, setOpen] = useState(true);

        return (
            <Backdrop
                style={{ color: '#fff', zIndex: 1000 }}
                open={open}
                onClick={() => setOpen(false)}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    },
    isSnippet: true,
    tags: ['Feedback', 'MUI'],
    cover: cover,
});
