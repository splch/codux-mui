import { createBoard } from '@wixc3/react-board';
import { Slider } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/slider-light.png';

export default createBoard({
    name: 'MUISlider',
    Board: () => {
        const [value, setValue] = useState(30);

        return (
            <Slider
                value={value}
                onChange={(event, newValue: number | number[], activeThumb: number) => setValue(newValue as number)}
                aria-labelledby="continuous-slider"
            />
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
