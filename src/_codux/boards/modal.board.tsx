import { createBoard } from '@wixc3/react-board';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default createBoard({
    name: 'MUIModal',
    Board: () => {
        const [open, setOpen] = useState(false);

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <div>
                <Button onClick={handleOpen}>Open Modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Typography id="modal-title" variant="h6" component="h2">
                            Modal Title
                        </Typography>
                        <Typography id="modal-description" sx={{ mt: 2 }}>
                            This is a simple modal.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
});
