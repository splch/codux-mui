import { createBoard } from '@wixc3/react-board';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/select-light.png';

export default createBoard({
    name: 'MUISelect',
    Board: () => {
        const [value, setValue] = useState('');

        return (
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Select"
                    onChange={(event) => setValue(event.target.value)}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
