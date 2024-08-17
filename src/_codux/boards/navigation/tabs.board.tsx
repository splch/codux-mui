import { createBoard } from '@wixc3/react-board';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/tabs-light.png';

export default createBoard({
    name: 'MUITabs',
    Board: () => {
        const [value, setValue] = useState(0);

        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };

        return (
            <>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
                <Box sx={{ p: 3 }}>
                    {value === 0 && <Typography>Item One Content</Typography>}
                    {value === 1 && <Typography>Item Two Content</Typography>}
                    {value === 2 && <Typography>Item Three Content</Typography>}
                </Box>
            </>
        );
    },
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
