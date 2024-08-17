import { createBoard } from '@wixc3/react-board';
import { Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/switch-light.png';

export default createBoard({
    name: 'MUISwitch',
    Board: () => {
        const [checked, setChecked] = useState(false);

        return (
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                }
                label="Switch"
            />
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
