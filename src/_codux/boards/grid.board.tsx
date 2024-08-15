import { createBoard } from '@wixc3/react-board';
import { Grid, Paper, Typography } from '@mui/material';
import cover from '../covers/grid-light.png';

export default createBoard({
    name: 'MUIGrid',
    Board: () => (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">Grid Item 1</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">Grid Item 2</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="body1">Grid Item 3</Typography>
                </Paper>
            </Grid>
        </Grid>
    ),
    isSnippet: true,
    tags: ['Layout', 'MUI'],
    cover: cover,
});
