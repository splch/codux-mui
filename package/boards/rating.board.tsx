import { createBoard } from '@wixc3/react-board';
import { Rating } from '@mui/material';
import { useState } from 'react';
import cover from '../covers/rating-light.png';

export default createBoard({
    name: 'MUIRating',
    Board: () => {
        const [value, setValue] = useState(2);

        return (
            <Rating
                name="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue as number);
                }}
            />
        );
    },
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
