import { createBoard } from '@wixc3/react-board';
import { Paper, Typography } from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import cover from '../covers/grid-v2-light.png';

export default createBoard({
    name: 'MUIGrid2',
    Board: () => (
        <Grid container spacing={2}>
            <Grid xs={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">Grid2 Item 1</Typography>
                </Paper>
            </Grid>
            <Grid xs={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">Grid2 Item 2</Typography>
                </Paper>
            </Grid>
            <Grid xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">Grid2 Item 3</Typography>
                </Paper>
            </Grid>
        </Grid>
    ),
    isSnippet: true,
    tags: ['Layout', 'MUI'],
    cover: cover,
});
