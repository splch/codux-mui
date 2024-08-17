import { createBoard } from '@wixc3/react-board';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/toggle-button-light.png';

export default createBoard({
    name: 'MUIToggleButton',
    Board: () => {
        const [alignment, setAlignment] = useState('left');

        const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
            setAlignment(newAlignment);
        };

        return (
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" aria-label="left aligned">
                    Left
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    Center
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    Right
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                    Justify
                </ToggleButton>
            </ToggleButtonGroup>
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
