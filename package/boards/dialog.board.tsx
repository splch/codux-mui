import { createBoard } from '@wixc3/react-board';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from '@mui/material';
import { useState } from 'react';
import cover from '../covers/dialog-light.png';

export default createBoard({
    name: 'MUIDialog',
    Board: () => {
        const [open, setOpen] = useState(true);

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This is an example of a dialog with some content text.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    },
    isSnippet: true,
    tags: ['Feedback', 'MUI'],
    cover: cover,
});
