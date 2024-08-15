import { createBoard } from '@wixc3/react-board';
import { Fade, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default createBoard({
    name: 'MUITransitions',
    Board: () => {
        const [show, setShow] = useState(false);

        const handleToggle = () => {
            setShow((prev) => !prev);
        };

        return (
            <div>
                <Button onClick={handleToggle}>{show ? 'Hide' : 'Show'} Text</Button>
                <Fade in={show}>
                    <Typography sx={{ mt: 2 }}>
                        This text appears with a fade transition.
                    </Typography>
                </Fade>
            </div>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
});
