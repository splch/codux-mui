import { createBoard } from '@wixc3/react-board';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/radio-group-light.png';

export default createBoard({
    name: 'MUIRadioGroup',
    Board: () => {
        const [value, setValue] = useState('option1');

        return (
            <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            </RadioGroup>
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
