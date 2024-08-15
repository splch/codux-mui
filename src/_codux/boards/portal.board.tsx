import { createBoard } from '@wixc3/react-board';
import { Portal, Button, Typography } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/portal-light.png';

export default createBoard({
    name: 'MUIPortal',
    Board: () => {
        const [show, setShow] = useState(false);

        const handleClick = () => {
            setShow((prev) => !prev);
        };

        return (
            <div>
                <Button onClick={handleClick}>{show ? 'Hide' : 'Show'} Portal Content</Button>
                {show && (
                    <Portal>
                        <Typography
                            sx={{
                                position: 'fixed',
                                top: 20,
                                right: 20,
                                bgcolor: 'background.paper',
                                p: 2,
                            }}
                        >
                            This content is rendered using a Portal.
                        </Typography>
                    </Portal>
                )}
            </div>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
    cover: cover,
});
