import { createBoard } from '@wixc3/react-board';
import { useMediaQuery, Typography } from '@mui/material';

export default createBoard({
    name: 'MUIUseMediaQuery',
    Board: () => {
        const matches = useMediaQuery('(min-width:600px)');

        return (
            <Typography variant="h6">
                {`This text is ${
                    matches ? 'visible on wide screens' : 'visible on narrow screens'
                }.`}
            </Typography>
        );
    },
    isSnippet: true,
    tags: ['Utils', 'MUI'],
});
