import { createBoard } from '@wixc3/react-board';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/checkbox-light.png';

export default createBoard({
    name: 'MUICheckbox',
    Board: () => {
        const [checked, setChecked] = useState(false);

        return (
            <FormControlLabel
                control={
                    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                }
                label="Checkbox"
            />
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
