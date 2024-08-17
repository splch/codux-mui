import { createBoard } from '@wixc3/react-board';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/autocomplete-light.png';

export default createBoard({
    name: 'MUIAutocomplete',
    Board: () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        const [value, setValue] = useState<string | null>(null);

        return (
            <Autocomplete
                options={options}
                renderInput={(params) => <TextField {...params} label="Autocomplete" />}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            />
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
