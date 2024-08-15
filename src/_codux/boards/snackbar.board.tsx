import { createBoard } from '@wixc3/react-board';
import { Snackbar, Button } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/snackbar-light.png';

export default createBoard({
    name: 'MUISnackbar',
    Board: () => {
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        return (
            <div>
                <Button onClick={handleClick}>Show Snackbar</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    message="This is a snackbar message"
                />
            </div>
        );
    },
    isSnippet: true,
    tags: ['Feedback', 'MUI'],
    cover: cover,
});
